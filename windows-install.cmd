@echo off
REM Verificar permisos de administrador
net session >nul 2>&1
if %errorLevel% neq 0 (
    echo Este script requiere permisos de administrador.
    echo Por favor, ejecuta como administrador (Click derecho, "Ejecutar como administrador")
    pause
    exit /b
)

set "VERSION=1.0.0"
set "INSTALL_DIR=%USERPROFILE%\.sqlift"
set "ARCH=x64"
if "%PROCESSOR_ARCHITECTURE%"=="ARM64" set "ARCH=arm64"

echo Instalando dependencias requeridas...
if "%ARCH%"=="arm64" (
    curl -L -o vcredist.exe https://aka.ms/vs/17/release/VC_redist.arm64.exe
) else (
    curl -L -o vcredist.exe https://aka.ms/vs/17/release/VC_redist.x64.exe
)

echo Instalando Visual C++ Redistributable...
vcredist.exe /install /quiet /norestart
if errorlevel 1 echo Error al instalar Visual C++ Redistributable
del vcredist.exe

echo Instalando SQLift...
if not exist "%INSTALL_DIR%" mkdir "%INSTALL_DIR%"
curl -L -o "%INSTALL_DIR%\sqlift.exe" "https://github.com/andressep95/SQLift/releases/download/v%VERSION%/sqlift-windows-%ARCH%.exe"

echo Agregando SQLift al PATH...
setx PATH "%PATH%;%INSTALL_DIR%" >nul

echo.
echo Instalacion completada.
echo IMPORTANTE: Necesitas abrir una nueva ventana de CMD para usar sqlift.
echo Para verificar la instalacion, abre una nueva ventana y ejecuta: sqlift --version
echo.

pause
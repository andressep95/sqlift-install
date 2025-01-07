@echo off
set "VERSION=1.0.0"
set "INSTALL_DIR=%USERPROFILE%\.sqlift"
set "ARCH=x64"
if "%PROCESSOR_ARCHITECTURE%"=="ARM64" set "ARCH=arm64"

echo Instalando SQLift...
if not exist "%INSTALL_DIR%" mkdir "%INSTALL_DIR%"

echo Descargando SQLift...
curl -L -o "%INSTALL_DIR%\sqlift.exe" "https://github.com/andressep95/SQLift/releases/download/v%VERSION%/sqlift-windows-%ARCH%.exe"

echo Configurando PATH...
setx PATH "%PATH%;%INSTALL_DIR%"

echo.
echo Instalacion completada.
echo IMPORTANTE: Por favor, asegurate de:
echo 1. Tener instalado Visual C++ Redistributable
echo 2. Abrir una nueva ventana de CMD para usar sqlift
echo 3. Ejecutar: sqlift --version para verificar la instalacion
echo.

pause
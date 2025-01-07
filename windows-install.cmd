@echo off
set "VERSION=1.0.0"
set "INSTALL_DIR=%USERPROFILE%\.sqlift"
set "ARCH=x64"
if "%PROCESSOR_ARCHITECTURE%"=="ARM64" set "ARCH=arm64"

echo Instalando dependencias requeridas...
if "%ARCH%"=="arm64" (
    echo Descargando Visual C++ Redistributable ARM64...
    curl -L -o "%TEMP%\vc_redist.exe" https://aka.ms/vs/17/release/VC_redist.arm64.exe
) else (
    echo Descargando Visual C++ Redistributable x64...
    curl -L -o "%TEMP%\vc_redist.exe" https://aka.ms/vs/17/release/VC_redist.x64.exe
)

echo Instalando Visual C++ Redistributable...
start /wait "%TEMP%\vc_redist.exe" /quiet /norestart
del "%TEMP%\vc_redist.exe"

echo Instalando SQLift...
set "BASE_URL=https://github.com/andressep95/SQLift/releases/download/v%VERSION%"
set "EXE_URL=%BASE_URL%/sqlift-windows-%ARCH%.exe"
if not exist "%INSTALL_DIR%" mkdir "%INSTALL_DIR%"
curl -L -o "%INSTALL_DIR%\sqlift.exe" "%EXE_URL%"
setx PATH "%PATH%;%INSTALL_DIR%"
echo Instalacion completada. Reinicia tu terminal y prueba con: sqlift --version

pause
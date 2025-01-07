@echo off
chcp 65001 > nul
setlocal enabledelayedexpansion

:: Configuración
set VERSION=1.0.0
set INSTALL_DIR=%USERPROFILE%\.sqlift
set ARCH=x64
if "%PROCESSOR_ARCHITECTURE%"=="ARM64" set ARCH=arm64
set BASE_URL=https://github.com/andressep95/SQLift/releases/download/v%VERSION%
set EXE_URL=%BASE_URL%/sqlift-windows-%ARCH%.exe

:: Crear directorio de instalación
if not exist "%INSTALL_DIR%" mkdir "%INSTALL_DIR%"

:: Descargar SQLift
echo Descargando SQLift para Windows (%ARCH%)...
curl -L -o "%INSTALL_DIR%\sqlift.exe" "%EXE_URL%"

:: Agregar al PATH
setx PATH "%PATH%;%INSTALL_DIR%"

echo Instalación completada. Reinicia tu terminal y prueba con: sqlift --version
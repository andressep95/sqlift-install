@echo off
chcp 65001 > nul
setlocal enabledelayedexpansion

:: Configuración
set "VERSION=1.0.0"
set "INSTALL_DIR=%USERPROFILE%\.sqlift"

:: Detectar arquitectura del sistema
set "ARCH=x64"
echo Detectando arquitectura del sistema...

if "%PROCESSOR_ARCHITECTURE%"=="ARM64" (
    set "ARCH=arm64"
    echo Arquitectura ARM64 detectada
) else (
    echo Arquitectura x64 detectada
)

set "BASE_URL=https://github.com/andressep95/SQLift/releases/download/v%VERSION%"
set "EXE_URL=%BASE_URL%/sqlift-windows-%ARCH%.exe"

:: Crear directorio de instalación
if not exist "%INSTALL_DIR%" (
    echo Creando directorio de instalacion...
    mkdir "%INSTALL_DIR%"
)

:: Descargar SQLift
echo Descargando SQLift para Windows (%ARCH%)...
curl -L -o "%INSTALL_DIR%\sqlift.exe" "%EXE_URL%"
if %errorlevel% neq 0 (
    echo Error al descargar SQLift
    exit /b 1
)

:: Agregar al PATH
echo Agregando SQLift al PATH...
setx PATH "%PATH%;%INSTALL_DIR%"

echo Instalacion completada. Reinicia tu terminal y prueba con: sqlift --version
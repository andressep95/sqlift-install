$ErrorActionPreference = 'Stop'
$VERSION = "1.0.0"
$INSTALL_DIR = "$HOME\.sqlift"

# Detectar arquitectura del sistema
Write-Host "🔍 Detectando arquitectura del sistema..."
$ARCH = "x64"
$osInfo = Get-WmiObject Win32_OperatingSystem
$procArch = $env:PROCESSOR_ARCHITECTURE

if ($procArch -eq "ARM64") {
    $ARCH = "arm64"
    Write-Host "✓ Arquitectura ARM64 detectada"
} elseif ($osInfo.OSArchitecture -eq "64-bit") {
    Write-Host "✓ Arquitectura x64 detectada"
} else {
    Write-Host "❌ Arquitectura no soportada"
    exit 1
}

$BASE_URL = "https://github.com/andressep95/SQLift/releases/download/v$VERSION"
$EXE_URL = "$BASE_URL/sqlift-windows-$ARCH.exe"

# Crear directorio de instalación si no existe
if (!(Test-Path $INSTALL_DIR)) {
    New-Item -ItemType Directory -Path $INSTALL_DIR | Out-Null
    Write-Host "📁 Creando directorio de instalación..."
}

Write-Host "⬇️ Descargando SQLift para Windows ($ARCH)..."
try {
    Invoke-WebRequest -Uri $EXE_URL -OutFile "$INSTALL_DIR\sqlift.exe"
    Write-Host "✅ Descarga completada"
} catch {
    Write-Host "❌ Error al descargar SQLift: $_"
    exit 1
}

# Agregar al PATH
try {
    [Environment]::SetEnvironmentVariable("Path", "$env:Path;$INSTALL_DIR", [System.EnvironmentVariableTarget]::User)
    Write-Host "✅ SQLift ha sido agregado al PATH"
} catch {
    Write-Host "⚠️ No se pudo agregar SQLift al PATH: $_"
    Write-Host "Por favor, agrégalo manualmente: $INSTALL_DIR"
}

Write-Host "✨ Instalación completada. Reinicia tu terminal y prueba con: sqlift --version"
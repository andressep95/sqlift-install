$ErrorActionPreference = 'Stop'
$VERSION = "1.0.0"
$BASE_URL = "https://github.com/andressep95/SQLift/releases/download/v$VERSION"
$INSTALL_DIR = "$HOME\.sqlift"
$ARCH = if ($env:PROCESSOR_ARCHITECTURE -eq "ARM64") { "arm64" } else { "x64" }
$EXE_URL = "$BASE_URL/sqlift-windows-$ARCH.exe"

# Crear directorio de instalación si no existe
if (!(Test-Path $INSTALL_DIR)) {
    New-Item -ItemType Directory -Path $INSTALL_DIR | Out-Null
    Write-Host "📁 Creando directorio de instalación..."
}

Write-Host "ℹ️ Descargando SQLift para Windows ($ARCH)..."
try {
    Invoke-WebRequest -Uri $EXE_URL -OutFile "$INSTALL_DIR\sqlift.exe"
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
$VERSION = "1.0.0"
$BASE_URL = "https://github.com/andressep95/SQLift/releases/download/v$VERSION"
$INSTALL_DIR = "$HOME\.sqlift"
$ARCH = if ($env:PROCESSOR_ARCHITECTURE -eq "ARM64") { "arm64" } else { "x64" }
$EXE_URL = "$BASE_URL/sqlift-windows-$ARCH.exe"

Write-Host "ℹ Descargando SQLift para Windows ($ARCH)..."
Invoke-WebRequest -Uri $EXE_URL -OutFile "$INSTALL_DIR\sqlift.exe" -ErrorAction Stop

# Agregar al PATH
[Environment]::SetEnvironmentVariable("Path", "$env:Path;$INSTALL_DIR", [System.EnvironmentVariableTarget]::User)

Write-Host "✓ Instalación completada. Reinicia tu terminal y prueba con: sqlift --version"

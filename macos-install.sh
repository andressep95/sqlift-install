#!/bin/bash
set -e

VERSION="1.0.0"
BASE_URL="https://github.com/andressep95/SQLift/releases/download/v${VERSION}"

log() { echo -e "\033[1;34mℹ\033[0m $1"; }

# Detectar arquitectura
ARCH=""
if [[ "$(uname -m)" == "arm64" ]]; then
    ARCH="arm64"
elif [[ "$(uname -m)" == "x86_64" ]]; then
    ARCH="x64"
else
    echo -e "\033[0;31m✗ Arquitectura no soportada\033[0m"
    exit 1
fi

log "Detectada macOS (${ARCH})"
URL="${BASE_URL}/sqlift-macos-${ARCH}"
INSTALL_DIR="$HOME/.sqlift"
mkdir -p "$INSTALL_DIR"

log "Descargando SQLift desde: $URL"
curl -L -o "$INSTALL_DIR/sqlift" "$URL"

# Verificar si el archivo es un binario ejecutable válido
if ! file "$INSTALL_DIR/sqlift" | grep -q "executable"; then
  echo -e "\033[0;31m✗ Error: El archivo descargado no es un binario válido\033[0m"
  exit 1
fi

chmod +x "$INSTALL_DIR/sqlift"

# Añadir el PATH en .zshrc y .bash_profile
echo 'export PATH="$HOME/.sqlift:$PATH"' >> "$HOME/.zshrc"
echo 'export PATH="$HOME/.sqlift:$PATH"' >> "$HOME/.bash_profile"

# Recargar .zshrc y .bash_profile para la sesión actual
source "$HOME/.zshrc"
source "$HOME/.bash_profile"

log "Instalación completada. Prueba ejecutando: sqlift --version"

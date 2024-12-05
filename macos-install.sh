#!/bin/bash
set -e

VERSION="1.0"
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

chmod +x "$INSTALL_DIR/sqlift"
echo 'export PATH="$HOME/.sqlift:$PATH"' >> "$HOME/.zshrc"

log "Instalación completada. Reinicia tu terminal o ejecuta: source ~/.zshrc"
log "Prueba ejecutando: sqlift --version"

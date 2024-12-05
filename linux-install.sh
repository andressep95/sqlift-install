#!/bin/bash
set -e

VERSION="1.0.0"
BASE_URL="https://github.com/andressep95/SQLift/releases/download/v${VERSION}"

log() { echo -e "\033[1;34mℹ\033[0m $1"; }

ARCH=""
if [[ "$(uname -m)" == "aarch64" ]]; then
    ARCH="arm64"
elif [[ "$(uname -m)" == "x86_64" ]]; then
    ARCH="x64"
else
    echo -e "\033[0;31m✗ Arquitectura no soportada\033[0m"
    exit 1
fi

log "Detectado Linux (${ARCH})"
URL="${BASE_URL}/sqlift-linux-${ARCH}"
INSTALL_DIR="$HOME/.sqlift"
mkdir -p "$INSTALL_DIR"

log "Descargando SQLift desde: $URL"
curl -L -o "$INSTALL_DIR/sqlift" "$URL"

chmod +x "$INSTALL_DIR/sqlift"
echo 'export PATH="$HOME/.sqlift:$PATH"' >> "$HOME/.bashrc"

log "Instalación completada. Reinicia tu terminal o ejecuta: source ~/.bashrc"
log "Prueba ejecutando: sqlift --version"

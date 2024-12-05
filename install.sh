#!/bin/bash
set -e

# Versión y configuración
VERSION="1.0"
GITHUB_USER="andressep95"
REPO_NAME="SQLift"
BASE_URL="https://github.com/${GITHUB_USER}/${REPO_NAME}/releases/download/v${VERSION}"

# Colores y estilos
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'
BOLD='\033[1m'

# Función para logs
log() {
    local type=$1
    local message=$2
    case $type in
        "info")    echo -e "${BLUE}ℹ ${NC}${message}";;
        "success") echo -e "${GREEN}✓ ${NC}${message}";;
        "error")   echo -e "${RED}✗ ${NC}${message}";;
        "warning") echo -e "${YELLOW}⚠ ${NC}${message}";;
    esac
}

# Detectar sistema operativo y arquitectura
detect_system() {
    local os arch
    case "$(uname -s)" in
        Darwin*)    
            os="macos"
            case "$(uname -m)" in
                arm64)      arch="arm64" ;;
                x86_64)     arch="x64" ;;
                *)
                    log "error" "Arquitectura no soportada"
                    exit 1
                    ;;
            esac
            ;;
        Linux*)     
            os="linux"
            case "$(uname -m)" in
                x86_64|amd64)   arch="x64" ;;
                aarch64|arm64)  arch="arm64" ;;
                *)              
                    log "error" "Arquitectura no soportada"
                    exit 1
                    ;;
            esac
            ;;
        MINGW*|MSYS*|CYGWIN*)  
            os="windows"
            arch="x64"
            ;;
        *)          
            log "error" "Sistema operativo no soportado"
            exit 1
            ;;
    esac
    echo "${os}:${arch}"
}

setup_windows() {
    local install_dir="$1"
    local executable="$2"

    if [[ "$(uname -s)" == *"MINGW"* ]]; then
        install_dir="$(cygpath -u "$USERPROFILE")/.sqlift"
    fi
    
    mkdir -p "$install_dir"
    
    # Agregar al PATH de Windows
    setx PATH "%PATH%;$install_dir" /M
    
    log "success" "Configuración de Windows completada"
}

install_sqlift() {
    local system=$(detect_system)
    local os=${system%:*}
    local arch=${system#*:}
    
    log "info" "Instalando SQLift para ${os} ${arch}"
    
    local executable="sqlift-${os}-${arch}"
    local install_dir="${HOME}/.sqlift"
    
    if [ "${os}" = "windows" ]; then
        executable="${executable}.exe"
        setup_windows "$install_dir" "$executable"
    fi
    
    mkdir -p "${install_dir}"
    
    local download_url="${BASE_URL}/${executable}"
    log "info" "Descargando desde: ${download_url}"
    
    curl -L -o "${install_dir}/sqlift" "${download_url}"
    
    if [ $? -ne 0 ]; then
        log "error" "Error al descargar SQLift"
        exit 1
    fi
    
    chmod +x "${install_dir}/sqlift"
    setup_path "${install_dir}"
    
    log "success" "SQLift instalado correctamente!"
    log "info" "Reinicia tu terminal o ejecuta: source ~/.zshrc"
    log "info" "Prueba ejecutando: sqlift --version"
}

setup_path() {
    local install_dir=$1
    local shell_config
    
    if [ -n "${ZSH_VERSION}" ]; then
        shell_config="${HOME}/.zshrc"
    elif [ -n "${BASH_VERSION}" ]; then
        shell_config="${HOME}/.bashrc"
    else
        shell_config="${HOME}/.profile"
    fi
    
    if ! grep -q "${install_dir}" "${shell_config}"; then
        echo 'export PATH="$HOME/.sqlift:$PATH"' >> "${shell_config}"
    fi
    
    source "${shell_config}"
}

# Ejecutar instalación
install_sqlift
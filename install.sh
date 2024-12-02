#!/bin/bash
set -e

VERSION="1.0"
GITHUB_USER="andressep95"
REPO_NAME="SQLift"
BASE_URL="https://github.com/${GITHUB_USER}/${REPO_NAME}/releases/download/v${VERSION}"

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

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
                    echo -e "${RED}Arquitectura no soportada${NC}"
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
                    echo -e "${RED}Arquitectura no soportada${NC}"
                    exit 1
                    ;;
            esac
            ;;
        MINGW*|MSYS*|CYGWIN*)  
            os="windows"
            arch="x64"
            ;;
        *)          
            echo -e "${RED}Sistema operativo no soportado${NC}"
            exit 1
            ;;
    esac

    echo "${os}:${arch}"
}

install_sqlift() {
    local system=$(detect_system)
    local os=${system%:*}
    local arch=${system#*:}
    
    echo -e "${BLUE}Instalando SQLift para ${os} ${arch}${NC}"

    # Ajustar la ruta según el sistema operativo y la arquitectura
    local executable="sqlift-${os}-${arch}"
    if [ "${os}" = "windows" ]; then
        executable="${executable}.exe"
    fi

    local install_dir="${HOME}/.sqlift"
    mkdir -p "${install_dir}"

    local download_url="${BASE_URL}/${executable}"

    echo "Descargando desde: ${download_url}"

    # Verificar que la URL responde correctamente
    http_response=$(curl -s -o /dev/null -w "%{http_code}" "${download_url}")
    if [ "$http_response" -ne 200 ]; then
        echo -e "${RED}Error: No se pudo descargar el archivo. Código de respuesta HTTP: $http_response${NC}"
        exit 1
    fi

    # Descargar archivo
    curl -L -o "${install_dir}/sqlift" "${download_url}"
    
    if [ $? -ne 0 ]; then
        echo -e "${RED}Error al descargar SQLift${NC}"
        exit 1
    fi

    # Verificar si el archivo es ejecutable
    echo "Verificando archivo descargado:"
    file "${install_dir}/sqlift"
    ls -l "${install_dir}/sqlift"
    
    if ! file "${install_dir}/sqlift" | grep -q "executable"; then
        echo -e "${RED}El archivo descargado no es un binario ejecutable válido.${NC}"
        exit 1
    fi

    chmod +x "${install_dir}/sqlift"

    setup_path "${install_dir}"

    echo -e "${GREEN}SQLift instalado correctamente!${NC}"
    echo -e "${BLUE}Reinicia tu terminal o ejecuta: source ~/.zshrc${NC}"
    echo -e "${BLUE}Prueba ejecutando: sqlift --version${NC}"
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

    # Añadir al PATH si no está ya
    if ! grep -q "${install_dir}" "${shell_config}"; then
        echo 'export PATH="$HOME/.sqlift:$PATH"' >> "${shell_config}"
    fi

    # Recargar el archivo de configuración del shell
    source "${shell_config}"
}

install_sqlift
 
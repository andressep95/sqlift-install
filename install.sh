#!/bin/bash

# Configuración
VERSION="0.0.4"
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
        Darwin*)    os="macos" ;;
        Linux*)     os="linux" ;;
        MINGW*|MSYS*|CYGWIN*)  os="windows" ;;
        *)          
            echo -e "${RED}Sistema operativo no soportado${NC}"
            exit 1
            ;;
    esac

    case "$(uname -m)" in
        x86_64|amd64)   arch="x64" ;;
        *)              
            echo -e "${RED}Arquitectura no soportada${NC}"
            exit 1
            ;;
    esac

    echo "${os}:${arch}"
}

# Instalar SQLift
install_sqlift() {
    local system=$(detect_system)
    local os=${system%:*}
    local arch=${system#*:}
    
    echo -e "${BLUE}Instalando SQLift para ${os} ${arch}${NC}"

    # Determinar nombre del ejecutable
    local executable="sqlift-${os}-${arch}"
    if [ "${os}" = "windows" ]; then
        executable="${executable}.exe"
    fi

    # Crear directorio de instalación
    local install_dir="${HOME}/.sqlift"
    mkdir -p "${install_dir}"

    # Descargar ejecutable
    echo -e "${BLUE}Descargando SQLift...${NC}"
    local download_url="${BASE_URL}/${executable}"
    curl -L -o "${install_dir}/sqlift" "${download_url}"
    
    if [ $? -ne 0 ]; then
        echo -e "${RED}Error al descargar SQLift${NC}"
        exit 1
    fi

    # Hacer ejecutable
    chmod +x "${install_dir}/sqlift"

    # Configurar PATH
    setup_path "${install_dir}"

    echo -e "${GREEN}SQLift instalado correctamente!${NC}"
    echo -e "${BLUE}Reinicia tu terminal o ejecuta: source ~/.bashrc${NC}"
    echo -e "${BLUE}Prueba ejecutando: sqlift --version${NC}"
}

# Configurar PATH
setup_path() {
    local install_dir=$1
    local shell_config

    # Detectar shell config file
    if [ -n "${ZSH_VERSION}" ]; then
        shell_config="${HOME}/.zshrc"
    elif [ -n "${BASH_VERSION}" ]; then
        shell_config="${HOME}/.bashrc"
    else
        shell_config="${HOME}/.profile"
    fi

    # Agregar al PATH si no existe
    if ! grep -q "${install_dir}" "${shell_config}"; then
        echo 'export PATH="$HOME/.sqlift:$PATH"' >> "${shell_config}"
    fi
}

# Ejecutar instalación
install_sqlift
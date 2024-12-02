Tu README está bastante claro. Aquí tienes el archivo README actualizado con el comando de instalación mejorado, el cual incluye la verificación del archivo descargado:

---

# SQLift Installer

Este script instala SQLift en tu sistema con un solo comando.

### Comando para instalar SQLift:

```bash
curl -fsSL https://raw.githubusercontent.com/andressep95/sqlift-install/main/install.sh | bash
```

### Descripción:

Este script detecta automáticamente tu sistema operativo y arquitectura (macOS, Linux o Windows) y descarga el archivo correspondiente de SQLift. Luego, instala el archivo binario en el directorio `~/.sqlift` y lo añade a tu PATH para que puedas usar el comando `sqlift` desde cualquier terminal.

### Verificación de la instalación:

El script verifica automáticamente que el archivo descargado sea ejecutable antes de completar la instalación.

Si todo ha ido bien, verás un mensaje de éxito con una indicación para reiniciar el terminal o ejecutar:

```bash
source ~/.zshrc  # Si usas zsh
# O
source ~/.bashrc  # Si usas bash
```

Finalmente, prueba la instalación ejecutando:

```bash
sqlift --version
```

---

Este README debe ser suficiente para que los usuarios comprendan cómo instalar SQLift usando el script y cómo verificar que la instalación fue exitosa.
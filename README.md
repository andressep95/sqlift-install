# SQLift Installer

### Repositorio de la herramienta (Por favor ingresar y dejar sus issues y estrellas)
https://github.com/andressep95/SQLift

## Introducción

SQLift es una herramienta que te ayuda a mapear consultas SQL a objetos Java. Este instalador te permite configurar SQLift en tu sistema con un solo comando, adaptado a tu sistema operativo.

## Instalación

### Comandos de instalación por sistema operativo:

#### macOS (Apple Silicon o Intel):
```bash
curl -fsSL https://raw.githubusercontent.com/andressep95/sqlift-install/main/macos-install.sh | bash
```

#### Windows (PowerShell):
```powershell
Invoke-WebRequest -Uri https://raw.githubusercontent.com/andressep95/sqlift-install/main/windows-install.ps1 -OutFile install.ps1; .\install.ps1
```

#### Linux:
```bash
curl -fsSL https://raw.githubusercontent.com/andressep95/sqlift-install/main/linux-install.sh | bash
```

### Descripción:

Estos comandos descargan el binario correspondiente. Posteriormente, instalan el archivo binario en el directorio `~/.sqlift` y lo agregan a tu `PATH`, permitiéndote usar el comando `sqlift` desde cualquier terminal.

### Verificación de la instalación:

El script verifica automáticamente que el archivo descargado sea ejecutable antes de completar la instalación. 

Si todo funcionó correctamente, verás un mensaje de éxito indicando que reinicies tu terminal o ejecutes:

```bash
source ~/.zshrc  # Si usas zsh
# O
source ~/.bashrc  # Si usas bash
```

Finalmente, prueba la instalación ejecutando:

```bash
sqlift --version
```

## Configuración

Edita el archivo `sqlift.yaml` con la siguiente estructura:

```yaml
version: "1"
sql:
  engine: "postgresql"     # Motor de base de datos
  schema: "path/to/your/schema.sql"
  output:
    package: "com.example.demo.entity"
    options:
      lombok: true or false
      jpa:
        enabled: true or false
        type: "jakarta"  # o "javax"
```

### Opciones de configuración:

- `version`: Versión de la configuración (actualmente "1")
- `sql`:
  - `engine`: Motor de base de datos (postgresql, mysql, etc.)
  - `schema`: Ruta a tu archivo de esquema SQL
  - `output`:
    - `package`: Paquete base para las entidades generadas
    - `options`:
      - `lombok`: Activar/desactivar anotaciones de Lombok
      - `jpa`:
        - `enabled`: Activar/desactivar anotaciones de JPA
        - `type`: Seleccionar implementación de JPA ("jakarta" o "javax")

## Características soportadas

- Motores de bases de datos soportados:
  - PostgreSQL
  - MySQL (Próximamente)
  - Oracle (Próximamente)
  - SQL Server (Próximamente)

- Opciones de generación de código:
  - Anotaciones de Lombok (@Data, @Getter, @Setter, etc.)
  - Anotaciones de JPA:
    - Jakarta EE (@Entity, @Table, @Column, etc.)
    - Java EE (javax.persistence.*)

## Uso

1. Inicializa la configuración:
   ```bash
   sqlift init
   ```

2. Edita el archivo `sqlift.yaml` con tu configuración.

3. Genera las entidades:
   ```bash
   sqlift generate
   ```

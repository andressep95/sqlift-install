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

#### Linux:
```bash
curl -fsSL https://raw.githubusercontent.com/andressep95/sqlift-install/main/linux-install.sh | bash
```

### Descripción:

Estos comandos descargan el binario correspondiente. Posteriormente, instalan el archivo binario en el directorio `~/.sqlift` y lo agregan a tu `PATH`, permitiéndote usar el comando `sqlift` desde cualquier terminal.

### Verificación:

Finalmente, prueba la instalación ejecutando:

```bash
sqlift --version
```

## Uso con Docker

Si prefieres usar SQLift mediante Docker, sigue los siguientes pasos:

1. **Descargar la imagen desde GitHub Container Registry (GHCR):**
   ```bash
   docker pull ghcr.io/andressep95/sqlift-cli:latest
   ```

2. **Inicializar la configuración:**
   ```bash
   docker run --rm -v $(pwd):/workspace ghcr.io/andressep95/sqlift-cli:latest init /workspace
   ```

3. **Editar el archivo de configuración `sqlift.yml`:**
   Asegúrate de que el archivo tenga la siguiente estructura:
   ```yaml
   version: "1.0"
   sql:
     engine: "postgres"
     schema: "schema.sql"
     output:
       package: "cl.playground.SpringSecurityBackend.model"
       lombok: true
   ```

4. **Generar las entidades:**
   ```bash
   docker run --rm -v $(pwd):/workspace ghcr.io/andressep95/sqlift-cli:latest generate /workspace
   ```

5. **Modo interactivo:**
   Si prefieres mantener el contenedor activo para ejecutar varios comandos:
   ```bash
   docker run -it -v $(pwd):/workspace ghcr.io/andressep95/sqlift-cli:latest
   ```

---

## Configuración

Edita el archivo `sqlift.yml` con la siguiente estructura:

```yaml
version: "1.0"
sql:
  engine: "postgres"  # Motor de base de datos
  schema: "schema.sql"  # Ruta al archivo de esquema SQL
  output:
    package: "cl.playground.SpringSecurityBackend.model"  # Paquete base para las entidades generadas
    lombok: true  # Activar/desactivar anotaciones de Lombok
```

### Opciones de configuración:

- `version`: Versión de la configuración (actualmente "1.0")
- `sql`:
  - `engine`: Motor de base de datos soportado (actualmente `postgres`)
  - `schema`: Ruta al archivo de esquema SQL
  - `output`:
    - `package`: Nombre del paquete base donde se generarán las entidades
    - `lombok`: Habilita o deshabilita las anotaciones de Lombok en las entidades generadas

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

2. Edita el archivo `sqlift.yml` con tu configuración.

3. Genera las entidades:
   ```bash
   sqlift generate
   ```


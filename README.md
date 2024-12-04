# SQLift Installer
https://github.com/andressep95/SQLift

## Introduction

SQLift is a tool that helps you map SQL queries to Java objects. This script installs SQLift on your system with a single command.

## Installation

### Command to install SQLift:

```bash
curl -fsSL https://raw.githubusercontent.com/andressep95/sqlift-install/main/install.sh | bash
```

### Description:

This script automatically detects your operating system and architecture (macOS, Linux, or Windows) and downloads the corresponding SQLift binary. It then installs the binary file in the `~/.sqlift` directory and adds it to your PATH so you can use the `sqlift` command from any terminal.

### Verification of the installation:

The script automatically verifies that the downloaded file is executable before completing the installation.

If everything went well, you will see a success message with an indication to restart the terminal or run:

```bash
source ~/.zshrc  # If you use zsh
# Or
source ~/.bashrc  # If you use bash
```

Finally, test the installation by running:

```bash
sqlift --version
```

## Configuration

Edit the `sqlift.yaml` file with the following structure:

```yaml
version: "1"
sql:
  engine: "postgresql"     # Database engine
  schema: "path/to/your/schema.sql"
  output:
    package: "com.example.demo.entity"
    options:
      lombok: true or false
      jpa:
        enabled: true or false
        type: "jakarta"  # or "javax"
```

### Configuration Options:

- `version`: Configuration version (currently "1")
- `sql`:
  - `engine`: Database engine (postgresql, mysql, etc.)
  - `schema`: Path to your SQL schema file
  - `output`:
    - `package`: Base package for generated entities
    - `options`:
      - `lombok`: Enable/disable Lombok annotations
      - `jpa`:
        - `enabled`: Enable/disable JPA annotations
        - `type`: Select JPA implementation ("jakarta" or "javax")

## Supported Features

- Supported Databases:
  - PostgreSQL
  - MySQL (Coming soon)
  - Oracle (Coming soon)
  - SQL Server (Coming soon)

- Code Generation Options:
  - Lombok annotations (@Data, @Getter, @Setter, etc.)
  - JPA annotations:
    - Jakarta EE (@Entity, @Table, @Column, etc.)
    - Java EE (javax.persistence.*)

## Usage

1. Initialize the configuration:
   ```bash
   sqlift init
   ```

2. Edit the `sqlift.yaml` file with your configuration

3. Generate the entities:
   ```bash
   sqlift generate
   ```

## License

[Placeholder for license information]

# SQLift Installer

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

## License

[Placeholder for license information]

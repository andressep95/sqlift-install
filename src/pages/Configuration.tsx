import React from 'react';
import { Terminal, Code2, Database, Settings, GitBranch } from 'lucide-react';

const initCommand = `sqlift init`;

const generateCommand = `sqlift generate`;

const configExample = `version: "1.0"
sql:
  engine: "postgres"  # Database engine
  schema: "schema.sql"  # Path to SQL schema file
  output:
    package: "cl.playground.SpringSecurityBackend.model"  # Base package for generated entities
    lombok: true  # Enable/disable Lombok annotations`;

const dockerExample = `# Pull the image
docker pull ghcr.io/andressep95/sqlift-cli:latest

# Initialize configuration
docker run --rm -v $(pwd):/workspace ghcr.io/andressep95/sqlift-cli:latest init /workspace

# Generate entities
docker run --rm -v $(pwd):/workspace ghcr.io/andressep95/sqlift-cli:latest generate /workspace

# Interactive mode
docker run -it -v $(pwd):/workspace ghcr.io/andressep95/sqlift-cli:latest`;

const supportedFeatures = `# Supported Databases:
- PostgreSQL
- MySQL (Coming soon)
- Oracle (Coming soon)
- SQL Server (Coming soon)

# Code Generation Options:
- Lombok annotations (@Data, @Getter, @Setter, etc.)
- JPA annotations:
  - Jakarta EE (@Entity, @Table, @Column, etc.)
  - Java EE (javax.persistence.*)`;

export default function Usage() {
  return (
    <main className="bg-gray-50">
      <div className="relative flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">SQLift Usage</span>
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl">
              Learn how to use SQLift to generate Java entities from your SQL schema
            </p>
            <div className="mt-8">
              <a
                href="https://github.com/andressep95/SQLift"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10 shadow-lg"
              >
                <GitBranch className="mr-2 h-5 w-5" />
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">
              Getting Started
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              How to Use SQLift
            </p>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Follow these steps to generate your Java entities from SQL schemas
            </p>
          </div>
        </div>

        <div className="mt-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <UsageSection
              icon={<Terminal className="h-6 w-6" />}
              title="Basic Commands"
              description="Basic commands to get started with SQLift:"
              code={`${initCommand}\n\n${generateCommand}`}
            />

            <UsageSection
              icon={<Settings className="h-6 w-6" />}
              title="Configuration"
              description="Create a sqlift.yml file with your configuration:"
              code={configExample}
            />

            <UsageSection
              icon={<Database className="h-6 w-6" />}
              title="Docker Usage"
              description="Using SQLift with Docker:"
              code={dockerExample}
            />

            <UsageSection
              icon={<Code2 className="h-6 w-6" />}
              title="Supported Features"
              description="Currently supported features and upcoming additions:"
              code={supportedFeatures}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

interface UsageSectionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  code: string;
}

function UsageSection({ icon, title, description, code }: UsageSectionProps) {
  return (
    <div className="relative bg-white p-6 rounded-lg shadow-lg border border-gray-200">
      <dt>
        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-600 text-white">
          {icon}
        </div>
        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{title}</p>
      </dt>
      <dd className="mt-2 ml-16 text-base text-gray-500">
        {description}
        <div className="mt-3 bg-gray-50 rounded-md p-4">
          <pre className="text-sm overflow-x-auto"><code>{code}</code></pre>
        </div>
      </dd>
    </div>
  );
}
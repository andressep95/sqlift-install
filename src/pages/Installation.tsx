import React from 'react';
import { Circle, Square, Menu } from 'lucide-react';

export default function Installation() {
  return (
    <main className="bg-gray-50">
      <div className="relative flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">SQLift Installation</span>
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl">
              Quick and easy installation guide for all supported platforms
            </p>
            <div className="mt-8">
              <a
                href="https://github.com/andressep95/SQLift"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10 shadow-lg"
              >
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
              Installation
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Choose Your Platform
            </p>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              SQLift provides native executables for macOS, Windows, and Linux platforms.
            </p>
          </div>
        </div>

        <div className="mt-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <InstallCard
              icon={<Circle className="h-6 w-6" />}
              platform="macOS"
              subtitle="Apple Silicon & Intel"
              command="curl -fsSL https://raw.githubusercontent.com/andressep95/sqlift-install/main/macos-install.sh | bash"
            />
            <InstallCard
              icon={<Square className="h-6 w-6" />}
              platform="Windows"
              subtitle="PowerShell or CMD Installation"
              commands={[
                {
                  type: "PowerShell",
                  command: "Invoke-WebRequest -Uri https://raw.githubusercontent.com/andressep95/sqlift-install/main/windows-install.ps1 -OutFile install.ps1; .\\install.ps1"
                },
                {
                  type: "CMD",
                  command: "curl -o install.cmd https://raw.githubusercontent.com/andressep95/sqlift-install/main/windows-install.cmd && install.cmd"
                }
              ]}
            />
            <InstallCard
              icon={<Menu className="h-6 w-6" />}
              platform="Linux"
              subtitle="Bash Command"
              command="curl -fsSL https://raw.githubusercontent.com/andressep95/sqlift-install/main/linux-install.sh | bash"
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-16 bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Verification</h3>
            </div>
            <div className="text-center">
              <p className="text-gray-500 mb-4">
                To verify the installation, run:
              </p>
            </div>
            <div className="bg-gray-50 rounded-md p-4 max-w-2xl mx-auto">
              <pre className="text-sm overflow-x-auto"><code>sqlift --version</code></pre>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

interface InstallCardProps {
  icon: React.ReactNode;
  platform: string;
  subtitle: string;
  command?: string;
  commands?: Array<{
    type: string;
    command: string;
  }>;
}

function InstallCard({ icon, platform, subtitle, command, commands }: InstallCardProps) {
  return (
    <div className="relative bg-white p-6 rounded-lg shadow-lg border border-gray-200">
      <dt>
        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-600 text-white">
          {icon}
        </div>
        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{platform}</p>
      </dt>
      <dd className="mt-2 ml-16">
        <p className="text-base text-gray-500 mb-4">{subtitle}</p>
        {command ? (
          <div className="bg-gray-50 rounded-md p-4">
            <pre className="text-sm overflow-x-auto"><code>{command}</code></pre>
          </div>
        ) : (
          <div className="space-y-4">
            {commands?.map((cmd, index) => (
              <div key={index}>
                <p className="text-sm font-medium text-gray-700 mb-2">{cmd.type}:</p>
                <div className="bg-gray-50 rounded-md p-4">
                  <pre className="text-sm overflow-x-auto"><code>{cmd.command}</code></pre>
                </div>
              </div>
            ))}
          </div>
        )}
      </dd>
    </div>
  );
}
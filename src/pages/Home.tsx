import React from 'react';
import { Link } from 'react-router-dom';
import { Database, Code2, Settings, Check } from 'lucide-react';

export default function Home() {
  return (
    <main>
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">SQL to Java Entity</span>
              <span className="block text-primary-600">Generator CLI Tool</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Transform your SQL schema into JPA-annotated Java classes with ease. Support for both Jakarta EE and Java EE.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link to="/docs/installation" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10">
                  Get Started
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link to="/docs" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                  Documentation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need for Java entity generation
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <FeatureCard
                icon={<Database className="h-6 w-6" />}
                title="Schema Processing"
                description="Parse CREATE TABLE statements, handle relationships, and maintain proper naming conventions."
              />
              <FeatureCard
                icon={<Code2 className="h-6 w-6" />}
                title="Code Generation"
                description="Generate clean, well-formatted Java code with proper JPA annotations and entity relationships."
              />
              <FeatureCard
                icon={<Settings className="h-6 w-6" />}
                title="Configuration"
                description="YAML-based configuration with flexible options for database engine, output package, and more."
              />
              <FeatureCard
                icon={<Check className="h-6 w-6" />}
                title="Cross-Platform"
                description="Native executables for Linux, macOS, and Windows with excellent performance."
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
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
      </dd>
    </div>
  );
}
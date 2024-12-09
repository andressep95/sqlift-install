import React from 'react';
import { Database, Code2, Settings, Check } from 'lucide-react';

export default function Documentation() {
  return (
    <main>
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">SQLift Documentation</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Complete guide to using SQLift for Java entity generation
            </p>
          </div>
        </div>
      </div>

      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Getting Started</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Core Features Overview
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <FeatureCard
                icon={<Database className="h-6 w-6" />}
                title="Schema Processing"
                features={[
                  "Parses CREATE TABLE statements",
                  "Handles complex relationships",
                  "Supports PostgreSQL types",
                  "Smart naming conventions"
                ]}
              />
              <FeatureCard
                icon={<Code2 className="h-6 w-6" />}
                title="Code Generation"
                features={[
                  "JPA-annotated classes",
                  "Entity relationships",
                  "Constructors & accessors",
                  "Clean, formatted output"
                ]}
              />
              <FeatureCard
                icon={<Settings className="h-6 w-6" />}
                title="Configuration"
                features={[
                  "YAML-based setup",
                  "Multiple DB support",
                  "Flexible output options",
                  "Lombok integration"
                ]}
              />
              <FeatureCard
                icon={<Check className="h-6 w-6" />}
                title="Framework Support"
                features={[
                  "Jakarta EE support",
                  "Java EE compatibility",
                  "JPA annotations",
                  "Cross-platform support"
                ]}
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
  features: string[];
}

function FeatureCard({ icon, title, features }: FeatureCardProps) {
  return (
    <div className="relative bg-white p-6 rounded-lg shadow-lg border border-gray-200">
      <dt>
        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-600 text-white">
          {icon}
        </div>
        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{title}</p>
      </dt>
      <dd className="mt-2 ml-16 text-base text-gray-500">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index}>• {feature}</li>
          ))}
        </ul>
      </dd>
    </div>
  );
}
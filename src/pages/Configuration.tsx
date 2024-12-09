import React from 'react';
import { Database, Code2, Settings, Check } from 'lucide-react';

const yamlConfigExample = `version: "1"
sql:
 engine: "postgresql"   # Database engine
 schema: "schema.sql"   # Path to your SQL schema file
 output:
   package: "cl.playground.alumnos.entity"  # Target package for generated entities
   options:
     lombok: false     # Enable/disable Lombok annotations
     jpa:
       enabled: true   # Enable JPA annotations
       type: "javax"   # Choose between "javax" or "jakarta"`;

const sqlSchemaExample = `CREATE TABLE usuarios (
   id SERIAL PRIMARY KEY,
   nombre VARCHAR(100) NOT NULL,
   email VARCHAR(150) UNIQUE NOT NULL,
   fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`;

const javaEntityExample = `// javax EE Entity Example
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

@Entity
@Table(name = "Usuario")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;
    @Column(name = "nombre", length = 100, nullable = false)
    private String nombre;
    @Column(name = "email", length = 150, nullable = false, unique = true)
    private String email;
    @Column(name = "fecha_creacion")
    private java.time.LocalDateTime fechaCreacion;
}`;

const jakartaEntityExample = javaEntityExample.replace(/javax/g, 'jakarta');

export default function Configuration() {
  return (
    <main>
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">SQLift Configuration</span>
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl">
              Configure SQLift to match your project's needs with a simple YAML file
            </p>
          </div>
        </div>
      </div>

      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-1 md:gap-8">
            <ConfigSection
              icon={<Settings className="h-6 w-6" />}
              title="Basic Configuration"
              description="Create a sqlift.yaml file in your project root:"
              code={yamlConfigExample}
            />
            <ConfigSection
              icon={<Database className="h-6 w-6" />}
              title="Schema Input"
              description="Example schema.sql file:"
              code={sqlSchemaExample}
            />
            <ConfigSection
              icon={<Code2 className="h-6 w-6" />}
              title="Javax EE Output"
              description="Generated Java entity with Javax EE annotations:"
              code={javaEntityExample}
            />
            <ConfigSection
              icon={<Code2 className="h-6 w-6" />}
              title="Jakarta EE Output"
              description="Generated Java entity with Jakarta EE annotations:"
              code={jakartaEntityExample}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

interface ConfigSectionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  code: string;
}

function ConfigSection({ icon, title, description, code }: ConfigSectionProps) {
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
        <pre className="mt-3 text-sm bg-gray-50 p-3 rounded-md overflow-x-auto">{code}</pre>
      </dd>
    </div>
  );
}
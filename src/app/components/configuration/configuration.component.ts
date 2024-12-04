import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-configuration',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <h1>Configuración</h1>
      
      <div class="card">
        <h2>Archivo de Configuración YAML</h2>
        <p>SQLift utiliza un archivo YAML para definir la configuración del proyecto. A continuación se muestra un ejemplo completo:</p>
        
        <div class="code-block">
          <pre><code>version: "1"
sql:
  - engine: "postgresql"
    schema: "path/to/schema.sql"
    output:
      package: "com.example.demo.entity"
      options:
        lombok: false or true
        jpa:
          enabled: true or false
          type: jakarta or javax
      </code></pre>
        </div>
      </div>

      <div class="card">
        <h2>Explicación de Parámetros</h2>
        <dl>
          <dt>version</dt>
          <dd>Versión del esquema de configuración (actualmente "1")</dd>
          
          <dt>sql.engine</dt>
          <dd>Motor de base de datos (postgresql)</dd>
          
          <dt>sql.schema</dt>
          <dd>Ruta al archivo SQL con el esquema de la base de datos</dd>
          
          <dt>output.package</dt>
          <dd>Paquete base para las clases generadas</dd>
          
          <dt>output.options.lombok</dt>
          <dd>Habilitar o deshabilitar la integración con Lombok (true/false)</dd>
          
          <dt>output.options.jpa.enabled</dt>
          <dd>Habilitar o deshabilitar la generación de anotaciones JPA (true/false)</dd>
          
          <dt>output.options.jpa.type</dt>
          <dd>Tipo de anotaciones JPA a utilizar (jakarta o javax)</dd>
        </dl>
      </div>
    </div>
  `,
  styles: [`
    dl {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 1rem;
      margin: 1rem 0;
    }
    dt {
      font-weight: bold;
      color: var(--primary-color);
    }
    dd {
      margin: 0;
    }
    .code-block {
      margin: 1rem 0;
    }
  `]
})
export class ConfigurationComponent {}
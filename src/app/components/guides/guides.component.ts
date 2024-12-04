import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guides',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <h1>Guías</h1>

      <div class="card">
        <h2>Caso Práctico: Configuración Inicial</h2>
        <ol>
          <li>
            <h3>Crear archivo de configuración</h3>
            <p>Ejecuta el comando de inicialización:</p>
            <div class="code-block">
              <pre><code>sqlift init</code></pre>
            </div>
          </li>
          <li>
            <h3>Editar sqlift.yaml</h3>
            <p>Personaliza la configuración según tu proyecto:</p>
            <div class="code-block">
              <pre><code>version: "1"
sql:
  - engine: "postgresql"
    file: "schema.sql"
    gen:
      java:
        basePackage: "com.myapp"
        entityPackage: "domain"
        repositoryPackage: "repository"
        repositoryType: "jpa"</code></pre>
            </div>
          </li>
          <li>
            <h3>Generar entidades</h3>
            <p>Ejecuta el generador:</p>
            <div class="code-block">
              <pre><code>sqlift generate</code></pre>
            </div>
          </li>
        </ol>
      </div>

      <div class="card">
        <h2>Resolución de Problemas Comunes</h2>
        <div class="problem-solution">
          <h3>Error: Archivo de configuración no encontrado</h3>
          <p>Asegúrate de estar en el directorio correcto o especifica la ruta:</p>
          <div class="code-block">
            <pre><code>sqlift generate --config ./path/to/sqlift.yaml</code></pre>
          </div>
        </div>

        <div class="problem-solution">
          <h3>Error: Sintaxis YAML inválida</h3>
          <p>Verifica la indentación y formato del archivo YAML. Usa un validador YAML en línea.</p>
        </div>

        <div class="problem-solution">
          <h3>Error: Tipo de datos no soportado</h3>
          <p>Revisa la compatibilidad de tipos entre SQL y Java en la documentación.</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    ol {
      list-style-type: none;
      counter-reset: item;
      padding-left: 0;
    }
    ol li {
      counter-increment: item;
      margin-bottom: 2rem;
    }
    ol li h3::before {
      content: counter(item) ". ";
      color: var(--primary-color);
    }
    .problem-solution {
      margin-bottom: 2rem;
    }
    .problem-solution h3 {
      color: var(--primary-color);
    }
    h2 {
      color: var(--primary-color);
      margin-top: 0;
    }
  `]
})
export class GuidesComponent {}
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="container">
      <div class="hero">
        <h1>SQLift: Generador de Entidades Java desde SQL</h1>
        <p class="description">
          Una herramienta CLI que convierte esquemas SQL en clases de entidades Java, 
          incluyendo configuraciones personalizadas para repositorios y paquetes.
        </p>
        
        <div class="card installation">
          <h2>Instalación</h2>
          <div class="code-block">
            <code>curl -fsSL https://raw.githubusercontent.com/andressep95/sqlift-install/main/install.sh | bash</code>
          </div>
        </div>

        <div class="card">
          <h2>Características Principales</h2>
          <ul>
            <li>Generación automática de entidades Java desde esquemas SQL</li>
            <li>Soporte para múltiples motores de base de datos</li>
            <li>Configuración flexible mediante YAML</li>
            <li>Generación de repositorios personalizables</li>
          </ul>
        </div>

        <div class="github-link">
          <a href="https://github.com/andressep95/sqlift" target="_blank" rel="noopener noreferrer">
            Ver en GitHub
          </a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .hero {
      padding: 2rem 0;
      text-align: center;
    }
    .description {
      font-size: 1.2rem;
      color: #666;
      max-width: 800px;
      margin: 1rem auto;
    }
    .installation {
      margin: 2rem 0;
    }
    .github-link {
      margin: 2rem 0;
    }
    .github-link a {
      color: var(--primary-color);
      text-decoration: none;
      padding: 0.5rem 1rem;
      border: 2px solid var(--primary-color);
      border-radius: 4px;
    }
    .github-link a:hover {
      background: var(--primary-color);
      color: white;
    }
  `]
})
export class HomeComponent {}
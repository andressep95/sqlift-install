import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-commands',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <h1>Comandos CLI</h1>

      <div class="card">
        <h2>sqlift init</h2>
        <p>Inicializa un nuevo proyecto SQLift con la configuración básica.</p>
        <div class="code-block">
          <pre><code>sqlift init</code></pre>
        </div>
        <p>Este comando genera:</p>
        <ul>
          <li>sqlift.yaml - Archivo de configuración base con opciones para el motor de base de datos, esquema SQL, paquete de salida y configuraciones de generación</li>
          <li>README.md - Archivo con documentación detallada sobre la configuración y uso de SQLift</li>
        </ul>
        <p>El archivo sqlift.yaml incluye:</p>
        <ul>
          <li>Configuración del motor de base de datos (PostgreSQL)</li>
          <li>Ruta al archivo de esquema SQL</li>
          <li>Paquete base para las entidades generadas</li>
          <li>Opciones para Lombok y anotaciones JPA (Jakarta/Javax)</li>
        </ul>
      </div>

      <div class="card">
        <h2>sqlift generate</h2>
        <p>Genera las clases Java basadas en el esquema SQL y la configuración.</p>
        <div class="code-block">
          <pre><code>sqlift generate</code></pre>
        </div>
        <p>Este comando realiza las siguientes acciones:</p>
        <ul>
          <li>Busca y lee el archivo de configuración sqlift.yaml en el directorio actual</li>
          <li>Valida que la configuración tenga todos los campos requeridos</li>
          <li>Lee el archivo SQL especificado en la configuración</li>
          <li>Genera las clases de entidad Java basadas en el esquema SQL</li>
          <li>Aplica las configuraciones de Lombok y JPA según lo especificado</li>
        </ul>
        <p>El comando mostrará mensajes de progreso y confirmará cuando las entidades se hayan generado exitosamente.</p>
      </div>

      <div class="card">
        <h2>sqlift --help</h2>
        <p>Muestra la ayuda general o específica para un comando.</p>
        <div class="code-block">
          <pre><code>sqlift --help
sqlift generate --help</code></pre>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .card h2 {
      color: var(--primary-color);
      margin-top: 0;
    }
    ul {
      list-style-type: none;
      padding-left: 0;
    }
    ul li {
      margin: 0.5rem 0;
      padding-left: 1.5rem;
      position: relative;
    }
    ul li::before {
      content: "•";
      color: var(--primary-color);
      position: absolute;
      left: 0;
    }
  `]
})
export class CommandsComponent {}
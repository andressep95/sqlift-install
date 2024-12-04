import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface GitHubRepo {
  stargazers_count: number;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <nav class="navbar">
      <div class="container">
        <div class="nav-content">
          <div class="nav-links">
            <a routerLink="/" class="nav-link">Inicio</a>
            <a routerLink="/configuration" class="nav-link" routerLinkActive="active-link">Configuración</a>
            <a routerLink="/commands" class="nav-link" routerLinkActive="active-link">Comandos CLI</a>
            <a routerLink="/example" class="nav-link" routerLinkActive="active-link">Ejemplo Práctico</a>
            <a routerLink="/guides" class="nav-link" routerLinkActive="active-link">Guías</a>
          </div>
          
          <div class="github-section">
            <a href="https://github.com/andressep95/SQLift" target="_blank" class="github-link">
              <svg height="28" width="28" viewBox="0 0 16 16" class="github-icon">
                <path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
              <span class="stars-count">
                Stars {{ stars !== null ? stars : 0 }}
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      background: var(--card-bg);
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      padding: 1rem 0;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }
    .nav-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .nav-links {
      display: flex;
      gap: 1rem;
      align-items: center;
    }
    .nav-link {
      text-decoration: none;
      color: inherit;
      padding: 0.5rem;
      border-radius: 0.25rem;
      transition: background-color 0.2s;
    }
    .nav-link:hover {
      background-color: rgba(0,0,0,0.05);
    }
    .active-link {
      font-weight: 500;
      background-color: rgba(0,0,0,0.05);
    }
    .github-section {
      margin-left: auto;
    }
    .github-link {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: inherit;
      text-decoration: none;
      padding: 0.5rem;
      border-radius: 0.25rem;
      transition: background-color 0.2s;
    }
    .github-link:hover {
      background-color: rgba(0,0,0,0.05);
    }
    .github-icon {
      opacity: 0.8;
    }
    .stars-count {
      font-size: 0.9rem;
      font-weight: 500;
      display: inline-flex;
      align-items: center;
    }
  `]
})
export class NavbarComponent implements OnInit {
  stars: number | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getGithubStars();
  }

  private getGithubStars() {
    const repoUrl = 'https://api.github.com/repos/andressep95/SQLift';
    
    this.http.get<GitHubRepo>(repoUrl).subscribe({
      next: (data) => {
        this.stars = data.stargazers_count;
      },
      error: (error) => {
        console.error('Error fetching GitHub stars:', error);
        this.stars = 0; // En caso de error, mostrar 0
      }
    });
  }
}
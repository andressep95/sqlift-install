import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import hljs from 'highlight.js';

@Component({
  selector: 'app-code-block',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="code-block">
      <pre><code [class]="language" [innerHTML]="highlightedCode"></code></pre>
    </div>
  `,
  styles: [`
    .code-block {
      background: #f8f9fa;
      border-radius: 4px;
      padding: 1rem;
      margin: 1rem 0;
      overflow-x: auto;
    }
    pre {
      margin: 0;
    }
    code {
      font-family: 'Fira Code', 'Consolas', monospace;
    }
  `]
})
export class CodeBlockComponent implements OnInit {
  @Input() code = '';
  @Input() language = 'plaintext';
  highlightedCode = '';

  ngOnInit() {
    this.highlightedCode = hljs.highlight(this.code, {
      language: this.language
    }).value;
  }
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeBlockComponent } from '../../shared/components/code-block/code-block.component';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [CommonModule, CodeBlockComponent],
  template: `
    <div class="container">
      <h1>Ejemplo Práctico</h1>

      <div class="card">
        <h2>Esquema SQL de Entrada</h2>
        <app-code-block
          language="sql"
          code="CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);"
        ></app-code-block>
      </div>

      <div class="card">
        <h2>Clase Java Generada</h2>
        <app-code-block
          language="java"
          code="package com.example.app.entity;

import java.time.LocalDateTime;
import javax.persistence.*;

@Entity
@Table(name = &quot;users&quot;)
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false, length = 50)
    private String username;

    @Column(nullable = false, length = 100, unique = true)
    private String email;

    @Column(name = &quot;created_at&quot;)
    private LocalDateTime createdAt;

    // Getters and setters
    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }

    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}"
        ></app-code-block>
      </div>
    </div>
  `
})
export class ExampleComponent {}
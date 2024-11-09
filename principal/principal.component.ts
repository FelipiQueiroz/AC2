// src/app/principal/principal.component.ts
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
})
export class PrincipalComponent implements OnInit {
  usuariosFiltrados = [];
  filtroNome: string = ''; // Declare filtroNome aqui

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.usuariosFiltrados = this.usuarioService.getUsuarios();
  }

  filtrarUsuarios() {
    this.usuariosFiltrados = this.usuarioService.getUsuarios().filter(usuario =>
      usuario.nome.toLowerCase().includes(this.filtroNome.toLowerCase())
    );
  }
}

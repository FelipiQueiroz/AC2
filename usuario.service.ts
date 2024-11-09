import { Injectable } from '@angular/core';

export interface Usuario {
  nome: string;
  email: string;
  telefone: string;
  senha: string;
  id: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuarios: Usuario[] = [
    { nome: "Edson Martin Feitosa", email: "edson.feitosa@facens.br", telefone: "(15) 99155448", senha: "123", id: "1" },
    { nome: "Jose da Silva", email: "josesilva@facens.br", telefone: "(15) 99155448", senha: "abc123", id: "2" },
    { nome: "Renata Cristina", email: "renata@hotmail.com", telefone: "(15) 99155222", senha: "123456", id: "3" }
  ];

  getUsuarios(): Usuario[] {
    return this.usuarios;
  }

  getUsuario(email: string, senha: string): Usuario | undefined {
    return this.usuarios.find(user => user.email === email && user.senha === senha);
  }
}

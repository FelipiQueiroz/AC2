import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  email: string = '';
  senha: string = '';
  mensagemErro: string = '';

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  login() {
    const usuario = this.usuarioService.getUsuario(this.email, this.senha);
    if (usuario) {
      this.router.navigate(['/principal']);
    } else {
      this.mensagemErro = 'E-mail ou senha inválido!';
    }
  }
}

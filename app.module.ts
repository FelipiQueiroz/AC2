// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importação do FormsModule

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UsuarioService } from '../services/usuario.service';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  // Adicione FormsModule aqui para usar ngModel
    RouterModule,       // Adiciona o RouterModule aos imports
    AppRoutingModule    // Adiciona o AppRoutingModule se existir
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }

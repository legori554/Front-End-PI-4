import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio02',
  standalone: false,
  templateUrl: './exercicio02.html',
  styleUrl: './exercicio02.scss',
})
export class Exercicio02 {
  usuarioLogado = false;

  exibirUsuario() {
    this.usuarioLogado
  }

  alternarLogin() {
  this.usuarioLogado = !this.usuarioLogado;
  }
}

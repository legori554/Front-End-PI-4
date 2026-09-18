import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio01',
  standalone: false,
  styleUrl: './exercicio01.scss',
  templateUrl: './exercicio01.html',
})
export class Exercicio01 {
  mensagemVisivel = false;

  alternarMensagem() {
    this.mensagemVisivel = !this.mensagemVisivel;
  }
}

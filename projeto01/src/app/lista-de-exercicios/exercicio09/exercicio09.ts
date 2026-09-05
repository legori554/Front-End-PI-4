import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio09',
  standalone: false,
  templateUrl: './exercicio09.html',
  styleUrl: './exercicio09.scss',
})
export class Exercicio09 {

  produto = 'Monitor Gamer';
  estoque = 0;

  aumentar() {
    this.estoque++;
  }

  diminuir() {
    this.estoque--;
  }
}

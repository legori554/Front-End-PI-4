import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio08',
  standalone: false,
  templateUrl: './exercicio08.html',
  styleUrl: './exercicio08.scss',
})
export class Exercicio08 {

  produto = 'Mouse Gamer';
  preco = 150.00;
  quantidade = 2;

  get total() {
    return this.preco * this.quantidade;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio06',
  standalone: false,
  templateUrl: './exercicio06.html',
  styleUrl: './exercicio06.scss',
})
export class Exercicio06 {
  quantidade = 0;
   
  aumentar() {
    this.quantidade++;
  }

  diminuir() {
    this.quantidade--;
  }
}

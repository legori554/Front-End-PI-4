import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio11',
  standalone: false,
  templateUrl: './exercicio11.html',
  styleUrl: './exercicio11.scss',
})
export class Exercicio11 {

  produto = 'Iphone 17 pro max';
  preco = 11550.00;
  quantidade = 1;
  recado = '';

  get total() {
    return this.preco * this.quantidade;
  }

  diminuir() {
      this.quantidade--;
    }
  

  aumentar() {
    this.quantidade++;
  }

  mensagem() {
    this.recado = this.quantidade + ' ' + this.produto + ' foram adicionados ao carrinho!';
  }
}

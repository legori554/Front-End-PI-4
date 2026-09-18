import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio04',
  standalone: false,
  templateUrl: './exercicio04.html',
  styleUrl: './exercicio04.scss',
})
export class Exercicio04 {
  nomeProduto = 'Teclado';
  quantidadeEstoque = 5;

  adicionarProduto() {
    this.quantidadeEstoque++;
  }

  removerProduto() {
    if (this.quantidadeEstoque > 0) {
      this.quantidadeEstoque--;
    }
  }
}

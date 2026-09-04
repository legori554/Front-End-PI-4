import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio02',
  standalone: false,
  templateUrl: './exercicio02.html',
  styleUrl: './exercicio02.scss',
})
export class Exercicio02 {
  produto = 'Teclado';
  preco = 150;
  quantidade =3;

  total = this.preco * this.quantidade; 
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio01',
  standalone: false,
  templateUrl: './exercicio01.html',
  styleUrl: './exercicio01.scss',
})
export class Exercicio01 {
  nome = 'Carlos';
  idade = 25;
  curso = 'Sistemas de Informação';
}

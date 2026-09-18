import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio06',
  standalone: false,
  templateUrl: './exercicio06.html',
  styleUrl: './exercicio06.scss',
})
export class Exercicio06 {

  nomesIniciais = [
    'João',
    'Maria',
    'Carlos',
    'Ana',
    'Pedro'
  ];

  nomes = [...this.nomesIniciais];

  removerUltimo() {
    this.nomes.pop();
  }

  limparLista() {
    this.nomes = [];
  }

  restaurarLista() {
    this.nomes = [...this.nomesIniciais];
  }

}

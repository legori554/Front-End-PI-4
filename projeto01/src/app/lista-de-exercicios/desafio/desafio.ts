import { Component } from '@angular/core';

@Component({
  selector: 'app-desafio',
  standalone: false,
  templateUrl: './desafio.html',
  styleUrl: './desafio.scss',
})
export class Desafio {

  nome = '';
  disciplinas = 1;
  recado = '';

  diminuir() {
      this.disciplinas--;
    }
  

  aumentar() {
    this.disciplinas++;
  }

  mensagem() {
    this.recado = 'Olá, ' + this.nome + '! Você foi matriculado em ' + this.disciplinas + ' disciplinas.';
  }
}

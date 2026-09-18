import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio03',
  standalone: false,
  templateUrl: './exercicio03.html',
  styleUrl: './exercicio03.scss',
})

export class Exercicio03 {
  idade = 20;

  classificarIdade() {
    if (this.idade < 12) {
      return 'Criança';
    } else if (this.idade < 18) {
      return 'Adolescente';
    } else if (this.idade < 60) {
      return 'Adulto';
    } else {
      return 'Idoso';
    }
  }

  aumentarIdade() {
    this.idade++;
  }
  diminuirIdade() {
    if (this.idade > 0) {
      this.idade--;
    }
  }
}


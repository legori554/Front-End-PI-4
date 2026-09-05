import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio05',
  standalone: false,
  templateUrl: './exercicio05.html',
  styleUrl: './exercicio05.scss',
})
export class Exercicio05 {
  curtidas = 0;
   
  aumentar() {
    this.curtidas++;
  }
}

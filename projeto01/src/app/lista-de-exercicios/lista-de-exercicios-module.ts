import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListaDeExerciciosRoutingModule } from './lista-de-exercicios-routing-module';
import { Exercicio01 } from './exercicio01/exercicio01';
import { Exercicio02 } from './exercicio02/exercicio02';
import { Exercicio03 } from './exercicio03/exercicio03';
import { Exercicio04 } from './exercicio04/exercicio04';
import { Exercicio05 } from './exercicio05/exercicio05';
import { Exercicio06 } from './exercicio06/exercicio06';
import { Exercicio07 } from './exercicio07/exercicio07';
import { Exercicio08 } from './exercicio08/exercicio08';
import { Exercicio09 } from './exercicio09/exercicio09';
import { Exercicio10 } from './exercicio10/exercicio10';
import { Exercicio11 } from './exercicio11/exercicio11';
import { Desafio } from './desafio/desafio';

@NgModule({
  declarations:[
    Exercicio01,
    Exercicio02,
    Exercicio03,
    Exercicio04,
    Exercicio05,
    Exercicio06,
    Exercicio07,
    Exercicio08,
    Exercicio09,
    Exercicio10,
    Exercicio11,
    Desafio,
  ],
  imports: [CommonModule, FormsModule, ListaDeExerciciosRoutingModule],
})
export class ListaDeExerciciosModule {}

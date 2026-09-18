import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaDeExercicios2RoutingModule } from './lista-de-exercicios-2-routing-module';
import { Exercicio01 } from './exercicio01/exercicio01';
import { Exercicio02 } from './exercicio02/exercicio02';
import { Exercicio03 } from './exercicio03/exercicio03';
import { Exercicio04 } from './exercicio04/exercicio04';
import { Exercicio05 } from './exercicio05/exercicio05';
import { Exercicio06 } from './exercicio06/exercicio06';
import { Exercicio07 } from './exercicio07/exercicio07';

@NgModule({
  declarations: [
    Exercicio01,
    Exercicio02,
    Exercicio03,
    Exercicio04,
    Exercicio05,
    Exercicio06,
    Exercicio07,
  ],
  imports: [CommonModule, ListaDeExercicios2RoutingModule],
})
export class ListaDeExercicios2Module {}

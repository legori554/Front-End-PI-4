import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaDeExercicios2RoutingModule } from './lista-de-exercicios-2-routing-module';
import { Exercicio01 } from './exercicio01/exercicio01';


@NgModule({
  declarations: [
    Exercicio01
  ],
  imports: [
    CommonModule,
    ListaDeExercicios2RoutingModule
  ]
})
export class ListaDeExercicios2Module { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListaDeExerciciosRoutingModule } from './lista-de-exercicios-routing-module';
import { Exercicio01 } from './exercicio01/exercicio01';
import { Exercicio02 } from './exercicio02/exercicio02';
import { Exercicio03 } from './exercicio03/exercicio03';
import { Exercicios04 } from './exercicios04/exercicios04';

@NgModule({
  declarations: [Exercicio01, Exercicio02, Exercicio03, Exercicios04],
  imports: [CommonModule, FormsModule, ListaDeExerciciosRoutingModule],
})
export class ListaDeExerciciosModule {}

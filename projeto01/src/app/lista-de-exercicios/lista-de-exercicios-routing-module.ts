import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
 

const routes: Routes = [
  { path: 'exercicio01', component: Exercicio01 },
  { path: 'exercicio02', component: Exercicio02 },
  { path: 'exercicio03', component: Exercicio03 },
  { path: 'exercicio04', component: Exercicio04 },
  { path: 'exercicio05', component: Exercicio05 },
  { path: 'exercicio06', component: Exercicio06 },
  { path: 'exercicio07', component: Exercicio07 },
  { path: 'exercicio08', component: Exercicio08 },
  { path: 'exercicio09', component: Exercicio09 },
  { path: 'exercicio10', component: Exercicio10 },
  { path: 'exercicio11', component: Exercicio11 },
  { path: 'desafio', component: Desafio},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaDeExerciciosRoutingModule {}
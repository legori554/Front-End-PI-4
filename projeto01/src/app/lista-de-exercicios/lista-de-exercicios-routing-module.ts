import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exercicio01 } from './exercicio01/exercicio01';
import { Exercicio02 } from './exercicio02/exercicio02';
import { Exercicio03 } from './exercicio03/exercicio03';
 

const routes: Routes = [
  { path: 'exercicio01', component: Exercicio01 },
  { path: 'exercicio02', component: Exercicio02 },
  { path: 'exercicio03', component: Exercicio03}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaDeExerciciosRoutingModule {}
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exercicio01 } from './exercicio01/exercicio01';


const routes: Routes = [
  {
    path: 'exercicio01',
    component: Exercicio01
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaDeExerciciosRoutingModule {}
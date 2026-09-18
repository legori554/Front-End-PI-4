import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'categoria',
    loadChildren: () =>
      import('./categoria/categoria-module')
        .then(m => m.CategoriaModule)
  },
  {
    path: 'lista-de-exercicios',
    loadChildren: () =>
      import('./lista-de-exercicios/lista-de-exercicios-module')
        .then(m => m.ListaDeExerciciosModule)
  },
  {
    path: 'lista-de-exercicios-02',
    loadChildren: () =>
      import('./lista-de-exercicios-2/lista-de-exercicios-2-module')
        .then(m => m.ListaDeExercicios2Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
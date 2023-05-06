import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatoUsuarioPage } from './dato-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: DatoUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatoUsuarioPageRoutingModule {}

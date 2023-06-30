import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'dato-usuario',
    loadChildren: () => import('./dato-usuario/dato-usuario.module').then( m => m.DatoUsuarioPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'factura',
    loadChildren: () => import('./factura/factura.module').then( m => m.FacturaPageModule)
  },
  {
    path: 'recibo',
    loadChildren: () => import('./recibo/recibo.module').then( m => m.ReciboPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

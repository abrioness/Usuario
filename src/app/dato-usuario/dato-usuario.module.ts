import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatoUsuarioPageRoutingModule } from './dato-usuario-routing.module';

import { DatoUsuarioPage } from './dato-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatoUsuarioPageRoutingModule
  ],
  declarations: [DatoUsuarioPage]
})
export class DatoUsuarioPageModule {}

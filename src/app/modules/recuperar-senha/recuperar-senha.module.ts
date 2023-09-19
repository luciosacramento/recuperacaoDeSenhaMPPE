import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { RecuperarSenhaRoutingModule } from './recuperar-senha-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    RecuperarSenhaRoutingModule
  ]
})
export class RecuperarSenhaModule {
  constructor() {
    console.log("RecuperarSenhaModule");
  }
 }

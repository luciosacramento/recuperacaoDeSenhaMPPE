import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { RecuperarSenhaRoutingModule } from './recuperar-senha-routing.module';
import { NovaSenhaComponent } from './pages/nova-senha/nova-senha.page';

@NgModule({
  declarations: [
    NovaSenhaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RecuperarSenhaRoutingModule
  ]
})
export class RecuperarSenhaModule {
  constructor() {
  }
 }

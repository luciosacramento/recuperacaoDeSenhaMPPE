import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { RecuperarSenhaRoutingModule } from './recuperar-senha-routing.module';
import { NovaSenhaPage } from './pages/nova-senha/nova-senha.page';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';

@NgModule({
  declarations: [
    NovaSenhaPage
  ],
  imports: [
    CommonModule,
    SharedModule,
    RecuperarSenhaRoutingModule,
    MatPasswordStrengthModule
  ]
})
export class RecuperarSenhaModule {
  constructor() {
  }
 }

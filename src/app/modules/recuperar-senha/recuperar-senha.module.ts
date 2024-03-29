import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { RecuperarSenhaRoutingModule } from './recuperar-senha-routing.module';
import { NovaSenhaPage } from './pages/nova-senha/nova-senha.page';
import { PasswordStrengthComponent } from 'src/app/shared/password-strength/password-strength.component';
import { QuestionarioPage } from './pages/questionario/questionario.page';

@NgModule({
  declarations: [
    NovaSenhaPage,
    PasswordStrengthComponent,
    QuestionarioPage,
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

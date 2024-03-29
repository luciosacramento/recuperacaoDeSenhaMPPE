import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EsqueceuSenhaPage } from './pages/esqueceu-senha/esqueceu-senha.page';
import { CodigoSegurancaPage } from './pages/codigo-seguranca/codigo-seguranca.page';
import { NovaSenhaPage } from './pages/nova-senha/nova-senha.page';
import { QuestionarioPage } from './pages/questionario/questionario.page';

const routes: Routes = [
  {
    path:"",
    component: EsqueceuSenhaPage,
  },
  {
    path:"codigo-seguranca",
    component: CodigoSegurancaPage,
  },
  {
    path:"nova-senha",
    component: NovaSenhaPage,
  },
  {
    path:"questionario",
    component: QuestionarioPage,
  },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecuperarSenhaRoutingModule { }

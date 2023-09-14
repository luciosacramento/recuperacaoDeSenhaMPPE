import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'recuperarsenha', pathMatch: 'full'},
  { path:'recuperarsenha',loadChildren: () => import('./modules/recuperar-senha/recuperar-senha.module').then(m => m.RecuperarSenhaModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

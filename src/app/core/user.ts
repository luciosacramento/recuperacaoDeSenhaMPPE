import { Injectable } from '@angular/core';




//Chave utilizada para guardar o userprofile em sessao
//O Profile é o objeto devolvido pelo keycloak após a realização do login
const KEY_USERPROFILE = 'userprofile';


@Injectable()
export class User { 
 
  constructor() {
 
  }

  //Realize o logoff do usuario corrente, chamando o keycloak
  logoff() {
    
    //Devolve para a tela inicial
    let lUrlInicio:string=window.location.href;
    lUrlInicio=lUrlInicio.slice(0,lUrlInicio.indexOf('/#')+1);

  }

  
  get username():string{
    return this.profile.username;
  }

  get firstName():string{
    return this.profile.firstName;
  }

  get lastName():string{
    return this.profile.lastName;
  }

  get email():string{
    return this.profile.email;
  }

  get logado(): boolean {
    return this.profile!=null;

  }

  get profile(): any {
    return null;

  }

  set profile(pUserProfile: any) {
   
    
  }


}

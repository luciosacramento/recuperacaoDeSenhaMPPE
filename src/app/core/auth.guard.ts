import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from "@angular/router";
import { User } from "./user";
import { Utils } from "./utils";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {
  authenticated: any;

  constructor(
    protected readonly router: Router,

    protected readonly user:User,
    protected readonly utils:Utils
  ) {
  }

  async isAccessAllowed(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {
console.log("AUTHGUARD!")
    if (!this.authenticated) {
      console.log("1!")
      this.user.profile=null;


    }
    else {
      console.log("2!")

      if (!this.user.logado) {

        let lProfile = null;

      
      }

    }

    return this.authenticated;

  }


}
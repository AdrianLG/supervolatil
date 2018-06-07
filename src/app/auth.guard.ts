import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth:AuthService, private router:Router){}

  canActivate(  nextRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Promise<boolean> {
    return this.auth.reAuth(nextRoute.routeConfig.path);
  }

}

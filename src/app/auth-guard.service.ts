import { Injectable, state } from '@angular/core';
import { Router, CanActivate,  ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.error("Hello", localStorage.getItem("username"));
    if (!this.auth.isAuthenticated()) {
      // not logged in so redirect to login page with the return url and return false
      this.router.navigate(['login'], { queryParams: { returnUrl: state.url }});
      return false;
    }

    return true;
  }
}

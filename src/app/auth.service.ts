import { Injectable } from '@angular/core';

import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {
  constructor(public jwtHelper: JwtHelperService) {}

  public isAuthenticated(): boolean {
    const username = localStorage.getItem('username');
    return !!username;
    //const token = localStorage.getItem('token');
    //// Check whether the token is expired and return
    //// true or false
    //return !this.jwtHelper.isTokenExpired(token);
  }

  public getUsername(): string {
    const username = localStorage.getItem('username');
    return username;
  }
}

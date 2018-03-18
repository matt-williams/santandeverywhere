import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

import { Account } from './account';

@Injectable()
export class AccountService {
  constructor(private http: HttpClient) { }

  createAccount(account: Account) {
    return this.http.post(`/phones/${account.username}`, account);
  }
}

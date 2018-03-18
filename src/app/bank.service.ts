import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class BankService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Authorization: DirectLogin username=${username}",password="${password}',consumer_key="fillinconsumerkeyhere"`
      })
    };

    var promise = this.http.post('https://santander.openbankproject.com/my/logins/direct', {}, httpOptions);
    return promise;
  }
}

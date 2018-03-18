import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

import { Device } from './device';

@Injectable()
export class DevicesService {
  constructor(private http: HttpClient) { }

  getDevices(username: string): Observable<Device[]> {
    var promise = this.http.get<Device[]>(`http://santandeverywhere.factern.com/phones/${username}/iots`);
    return promise;
  }
}

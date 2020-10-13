
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiProvider {

  constructor() { }

  request(controller, method, param = '') {

    console.log(environment.baseUrl +
      controller + '/' +
      method +
      (param !== '' ? ('/' + param) : ''));

    return environment.baseUrl +
      controller + '/' +
      method +
      (param !== '' ? ('/' + param) : '');

  }
}

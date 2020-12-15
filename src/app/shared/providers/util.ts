import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class UtilProvider{
  private loading: any;
  emiterEvent = new EventEmitter();

  constructor() { }


}

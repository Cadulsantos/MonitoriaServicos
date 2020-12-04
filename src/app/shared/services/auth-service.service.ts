import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private usuarioAutenticado : boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor() { }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiProvider } from './../providers/api';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private _CONTROLLER = "Usuario";

  constructor(public http: HttpClient, private api: ApiProvider) { }

  autenticacaoUsuario(usuario: object)
  {
    return this.http.post(this.api.request(this._CONTROLLER, "AutenticacaoUsuario"), usuario).pipe(take(1));

  }
}

import { usuario } from './../Model/usuario';
import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { ApiProvider } from './../providers/api';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private _CONTROLLER = "Usuario";

  private http : HttpClient ;

  usuario : usuario;

  constructor(
    public httpClient: HttpClient,
    public httpBackEnd: HttpBackend,
    private api: ApiProvider,
    ) {
      this.http = new HttpClient(this.httpBackEnd);
    }

  // autenticacaoUsuario(usuario: usuario)
  // {
  //   // console.log(usuario)
  //   var variavel = this.http.post<usuario>(this.api.request(this._CONTROLLER, "AutenticacaoUsuario"), usuario).pipe();

  //   console.log(variavel);

  //   return this.http.post<usuario>(this.api.request(this._CONTROLLER, "AutenticacaoUsuario"), usuario).pipe();;
  //   // return this.httpClient.post(this.api.request(this._CONTROLLER, "AutenticacaoUsuario"), usuario);
  // }
}

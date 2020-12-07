import { HttpBackend, HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

import { ApiProvider } from './../providers/api';
import { usuario } from './../Model/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _CONTROLLER = "Usuario";

  private http : HttpClient ;

  private usuarioAutenticado : boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(
    public httpClient: HttpClient,
    public httpBackEnd: HttpBackend,
    private api: ApiProvider,
  )
  {
    this.http = new HttpClient(this.httpBackEnd);
  }

  usuarioAuth(){
    console.log("usuarioAuth");
    return this.usuarioAutenticado;
  }

  autenticacao(usuario: any) : any
  {
    console.log("autenticacao");
    var authUsua : any;

    // this.http.post<usuario>(this.api.request(this._CONTROLLER, "AutenticacaoUsuario"), usuario)
    // .pipe(
    //   Map((usua : usuario)=>{
    //     return usua;
    //   })
    // );

    this.http.post<usuario>(this.api.request(this._CONTROLLER, "AutenticacaoUsuario"), usuario).pipe().subscribe(
      usua => {
        authUsua = usua;
        console.log(authUsua);
      },(error) =>{
        console.log(error.error)
        // this.mostrarMenuEmitter.emit(false);
        return null;
      }
    );

      return authUsua;
  }


}


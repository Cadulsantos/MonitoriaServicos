import { HttpBackend, HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { catchError, map } from "rxjs/operators";
import { from, Observable, throwError } from 'rxjs';

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
    // var authUsua : any;

    return this.http.post<usuario>(this.api.request(this._CONTROLLER, "AutenticacaoUsuario"), usuario);
    // .pipe(
    //   map((usua  : any) => {
    //     console.log(usua);
    //   })
    // ), catchError( error => {
    //   return throwError( error.error );
    // });

    // this.http.post<usuario>(this.api.request(this._CONTROLLER, "AutenticacaoUsuario"), usuario).pipe().subscribe(
    //   usua => {
    //     // console.log(usua);
    //    return usua;

    //   },(error) =>{
    //     console.log(error.error)
    //     // this.mostrarMenuEmitter.emit(false);
    //     return null;
    //   }
    // );

      // return authUsua;
  }



}


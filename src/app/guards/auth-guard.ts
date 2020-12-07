import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot,  CanActivate, RouterStateSnapshot,  Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/services/auth-service';


@Injectable({
  providedIn: 'root'
})


export class AuthGuard implements CanActivate {

  constructor(
    private route: Router,
    private authService : AuthService
    ){}

  canActivate(
    route : ActivatedRouteSnapshot,
    state : RouterStateSnapshot
  ): Observable<boolean> | boolean {


   return this.VerificarAcesso();
  // return true;

  }

  private VerificarAcesso(){

    // const token = localStorage.getItem('Token');

    // console.log(token);

    // if(token){
    //   return true;
    // }

    if(this.authService.usuarioAuth() === true){
      this.authService.mostrarMenuEmitter.emit(true);
      return  true;
    }

    this.authService.mostrarMenuEmitter.emit(false);
    this.route.navigate(['login']);

  }


}

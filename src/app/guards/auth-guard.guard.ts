import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})


export class AuthGuardGuard implements CanActivate {

  constructor(private route: Router){}
  canActivate(){
    const token = localStorage.getItem('Token');

    if(token)
      return true;

    return this.route.navigate(['login']);

  }

}

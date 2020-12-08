import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {
    path: 'login',
    loadChildren : () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'home',
    loadChildren : () => import('./home/home.module').then(m => m.HomeModule),
    canActivate: [AuthGuard]
  },
  {
    path : 'servicos',

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcessoComponent } from './acesso.component';


const routes: Routes = [
  {path: '', pathMatch : 'full', redirectTo: 'login'},
  {
    path: 'login',
    loadChildren : () => import('././login/login.module').then(m => m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AcessoRoutingModule { }

import { AcessoModule } from './acesso/acesso.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './admin/guards/auth.guard';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'acesso'},
  {
    path: 'acesso',
    loadChildren : () => import('./acesso/acesso.module').then(m => m.AcessoModule)
  },
  {
    path: 'admin',
    loadChildren : () => import('./admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

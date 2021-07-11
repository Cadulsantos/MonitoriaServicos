import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './admin/guards/auth.guard';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {
    path: 'login',
    loadChildren : () => import('./acesso/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'home',
    loadChildren : () => import('./admin/pages/home/home.module').then(m => m.HomeModule),
    canActivate: [AuthGuard]
  },
  {
    path : 'servicos',
    loadChildren : () => import('./admin/pages/servicos/servicos.module').then(m => m.ServicosModule),
    canActivate: [AuthGuard]
  },
  {
    path : 'dashboard',
    loadChildren: () => import('./admin/pages/dashboard-monitoria-servico/dashboard-monitoria-servico.module').then(m => m.DashboardMonitoriaServicoModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

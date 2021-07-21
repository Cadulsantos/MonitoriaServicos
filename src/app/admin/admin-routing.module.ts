import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { ServicosComponent } from './pages/servicos/servicos.component';


const routes: Routes = [
  {path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'servicos', pathMatch: 'full' },
      {path: 'servicos', component: ServicosComponent}

    ]
  }
  // {
  //   path: 'home',
  //   loadChildren : () => import('./pages/home/home.module').then(m => m.HomeModule),
  //   // canActivate: [AuthGuard]
  // },
  // {
  //   path : 'servicos',
  //   loadChildren : () => import('./pages/servicos/servicos.module').then(m => m.ServicosModule),
  //   // canActivate: [AuthGuard]
  // },
  // {
  //   path : 'dashboard',
  //   loadChildren: () => import('./pages/dashboard-monitoria-servico/dashboard-monitoria-servico.module').then(m => m.DashboardMonitoriaServicoModule),
  //   // canActivate: [AuthGuard]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class  AdminRoutingModule { }

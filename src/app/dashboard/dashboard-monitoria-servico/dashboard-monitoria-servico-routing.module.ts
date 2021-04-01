import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardMonitoriaServicoComponent } from './dashboard-monitoria-servico.component';


const routes: Routes = [
  {path: '', pathMatch : 'full', component: DashboardMonitoriaServicoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardMonitoriaServicoRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardMonitoriaServicoComponent } from './dashboard-monitoria-servico.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardMonitoriaServicoRoutingModule } from './dashboard-monitoria-servico-routing.module';

@NgModule({
  declarations: [
    DashboardMonitoriaServicoComponent

  ],
  imports: [
    CommonModule,
    DashboardMonitoriaServicoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]

})
export class DashboardMonitoriaServicoModule { }

import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { CustomMaterialModule } from '../core/material.module';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { LogErroServicoComponent } from './components/log-erro-servico/log-erro-servico.component';
import { LogExecucaoServicoComponent } from './components/log-execucao-servico/log-execucao-servico.component';
import { ConfiguracaoServicoComponent } from './components/configuracao-servico/configuracao-servico.component';

@NgModule({
  declarations: [
    AdminComponent,
    ServicosComponent,
    LogErroServicoComponent,
    LogExecucaoServicoComponent,
    ConfiguracaoServicoComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CustomMaterialModule,
    SharedModule
  ]
})
export class AdminModule { }

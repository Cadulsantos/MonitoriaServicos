import { LoginModule } from './acesso/login/login.module';
import { ServicosModule } from './admin/pages/servicos/servicos.module';
import { HomeModule } from './admin/pages/home/home.module';
import { AuthService } from './admin/services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { CustomMaterialModule } from './core/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './acesso/login/login.component';
import { ServicosGuard } from './admin/guards/servicos.guard';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { LogErroServicoComponent } from './admin/components/log-erro-servico/log-erro-servico.component';
import { LogExecucaoServicoComponent } from './admin/components/log-execucao-servico/log-execucao-servico.component';
import { ConfiguracaoServicoComponent } from './admin/components/configuracao-servico/configuracao-servico.component';
import { DashboardMonitoriaServicoModule } from './admin/pages/dashboard-monitoria-servico/dashboard-monitoria-servico.module';
import { PaginationModule } from 'ngx-bootstrap/pagination';


@NgModule({
  declarations: [
    AppComponent,
    LogErroServicoComponent,
    LogExecucaoServicoComponent,
    ConfiguracaoServicoComponent
    // LoginComponent
    // HomeComponent
      // DashboardMonitoriaServicoComponent
   ],
  imports: [
    // COLOCAR EM OUTRO MODULO SHARED
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    PaginationModule.forRoot(),

    // COLOCAR EM OUTRO MODULO SHARED

    HttpClientModule,
    HomeModule,
    LoginModule,
    ServicosModule,
    DashboardMonitoriaServicoModule
  ],
  providers: [
    AuthService//,
    // ServicosGuard
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

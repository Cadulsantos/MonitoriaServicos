import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcessoComponent } from './acesso.component';
import { AcessoRoutingModule } from './acesso-routing.module';
import { LoginModule } from './login/login.module';



@NgModule({
  declarations: [AcessoComponent],
  imports: [
    CommonModule,

    AcessoRoutingModule,
    // LoginModule,
  ]
})
export class AcessoModule { }

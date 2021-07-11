import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { ServicosComponent } from './servicos.component';
import { ServicosRoutingModule } from './servicos-routing.module';



@NgModule({
  declarations: [
    ServicosComponent
  ],
  imports: [
    CommonModule,
    ServicosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot()
  ]
})
export class ServicosModule {

}

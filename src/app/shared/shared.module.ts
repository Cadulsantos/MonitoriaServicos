import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BootstrapModule } from "././plugins/bootstrap/bootstrap.module";



@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    BootstrapModule

  ],
  exports: [
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    BootstrapModule
  ],
  providers: []

})
export class SharedModule { }

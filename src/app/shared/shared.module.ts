import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BootstrapModule } from "././plugins/bootstrap/bootstrap.module";
import { ConfirmModalComponent } from './Components/confirm-modal/confirm-modal.component';



@NgModule({
  declarations: [
    ConfirmModalComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    BootstrapModule,
    TooltipModule.forRoot()

  ],
  exports: [
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    BootstrapModule,
    TooltipModule
  ],
  providers: [],
  entryComponents: [
    ConfirmModalComponent
  ]

})
export class SharedModule { }

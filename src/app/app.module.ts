import { HomeComponent } from './home/home.component';
import { ServicosModule } from './servicos/servicos.module';
import { HomeModule } from './home/home.module';
import { AuthService } from './shared/services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { CustomMaterialModule } from './core/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServicosComponent } from './servicos/servicos.component';
import { LoginComponent } from './login/login.component';
import { ServicosGuard } from './guards/servicos.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
    // HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // BrowserAnimationsModule,
    // CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HomeModule,
    // ServicosModule
  ],
  providers: [
    AuthService,
    ServicosGuard
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

import { SharedModule } from './shared/shared.module';
import { AuthService } from './admin/services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    // AcessoComponent,
   ],
  imports: [
    // COLOCAR EM OUTRO MODULO SHARED
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // COLOCAR EM OUTRO MODULO SHARED
    AppRoutingModule,
    SharedModule

  ],
  providers: [
    AuthService//,
    // ServicosGuard
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

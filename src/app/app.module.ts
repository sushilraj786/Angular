import { RouterModule } from '@angular/router';
import { SigninModule } from './signin/signin.module';
import { BaseLayoutModule } from './base-layout/base-layout.module';
import { SignupModule } from './signup/signup.module';
import { AppRoutes } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SigninModule,
    SignupModule,
    BaseLayoutModule,
    AppRoutes,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent],
exports: [
  RouterModule
]
})
export class AppModule { }

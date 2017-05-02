import { SigninRoutes } from './signin.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    CommonModule,
    SigninRoutes
  ],
  declarations: [SigninComponent,
    IndexComponent
]
})
export class SigninModule { }
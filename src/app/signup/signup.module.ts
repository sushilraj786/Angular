import { SignupRoutes } from './signup.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    CommonModule,
    SignupRoutes
  ],
  declarations: [SignupComponent,
    IndexComponent
]
})
export class SignupModule { }
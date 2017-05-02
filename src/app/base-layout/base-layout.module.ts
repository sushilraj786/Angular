import { RouterModule } from '@angular/router';
import { DivisionModule } from './../division/division.module';
import { OrganizationModule } from './../organization/organization.module';
import { BaseLayoutRoutes } from './base-layout.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseLayoutComponent } from './base-layout.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    CommonModule,
    BaseLayoutRoutes,
    OrganizationModule,
    DivisionModule
  ],
  declarations: [
    BaseLayoutComponent,
    IndexComponent
],
exports: [
  RouterModule
]
})
export class BaseLayoutModule { }
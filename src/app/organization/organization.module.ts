import { RouterModule } from '@angular/router';
import { OrganizationRoutes } from './organization.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationComponent } from './organization.component';
import { OrganizationIndexComponent } from './index/index.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  imports: [
    CommonModule,
    OrganizationRoutes
  ],
  declarations: [
    OrganizationComponent,
    OrganizationIndexComponent,
    ListComponent,
    EditComponent
],
exports: [
  RouterModule
]
})
export class OrganizationModule { }
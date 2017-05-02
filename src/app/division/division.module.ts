import { RouterModule } from '@angular/router';
import { DivisionRoutes } from './division.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DivisionComponent } from './division.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { DivisionIndexComponent } from './index/index.component';

@NgModule({
  imports: [
    CommonModule,
    DivisionRoutes
  ],
  declarations: [DivisionComponent,
    ListComponent,
    EditComponent,
    DivisionIndexComponent
],
exports: [
  RouterModule
]
})
export class DivisionModule { }
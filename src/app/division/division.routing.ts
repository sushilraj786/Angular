import { DivisionIndexComponent } from './index/index.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { DivisionComponent } from './division.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'division',
     component: DivisionIndexComponent,
    children: [
      {
        path: '',
        component: DivisionComponent
      },
      {
        path: 'index',
        component: DivisionComponent
      },
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'edit',
        component: EditComponent
      }
    ]
   }
];

export const DivisionRoutes = RouterModule.forChild(routes);

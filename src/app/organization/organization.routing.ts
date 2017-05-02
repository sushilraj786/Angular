import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { OrganizationIndexComponent } from './index/index.component';
import { OrganizationComponent } from './organization.component';
import { IndexComponent } from './../base-layout/index/index.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'organization',
     component: OrganizationIndexComponent,
    children: [
      {
        path: '',
        component: OrganizationComponent
      },
      {
        path: 'index',
        component: OrganizationComponent
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

export const OrganizationRoutes = RouterModule.forChild(routes);

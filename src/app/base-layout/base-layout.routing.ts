import { BaseLayoutComponent } from './base-layout.component';
import { IndexComponent } from './index/index.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
    path: 'app',
     component: IndexComponent,
    children: [
      {
        path: '',
        component: BaseLayoutComponent
      },
      {
        path: 'organization', loadChildren: 'app/organization/organization.module#OrganizationModule'
      },
      {
        path: 'division', loadChildren: 'app/division/division.module#DivisionModule'
      }
    ]
   }
];

export const BaseLayoutRoutes = RouterModule.forChild(routes);

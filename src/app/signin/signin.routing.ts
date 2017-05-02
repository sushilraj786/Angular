import { IndexComponent } from './index/index.component';
import { SigninComponent } from './signin.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{
    path: 'signin',
     component: IndexComponent,
    children: [
      {
        path: '',
        component: SigninComponent
      },
      {
        path: 'index',
        component: SigninComponent
      }
    ]
   }
];

export const SigninRoutes = RouterModule.forChild(routes);

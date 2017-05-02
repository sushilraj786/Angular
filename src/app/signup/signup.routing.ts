import { SignupComponent } from './signup.component';
import { IndexComponent } from './index/index.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'signup',
     component: IndexComponent,
    children: [
      {
        path: '',
        component: SignupComponent
      },
      {
        path: 'index',
        component: SignupComponent
      }
    ]
   }
];

export const SignupRoutes = RouterModule.forChild(routes);

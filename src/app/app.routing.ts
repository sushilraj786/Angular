import { BaseLayoutModule } from './base-layout/base-layout.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
     path: 'signin',
     loadChildren : './signin/signin.module#SigninModule'
  },
   {
     path: 'signup',
     loadChildren : './signup/signup.module#SignupModule'
  },
   {
     path: 'app',
     loadChildren : './base-layout/base-layout.module#BaseLayoutModule'
  },
   {
     path: '', redirectTo: 'signin', pathMatch: 'full'
  },
];

export const AppRoutes = RouterModule.forRoot(routes);

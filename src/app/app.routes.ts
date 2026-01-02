import { Routes } from '@angular/router';
import { Landingpages } from './pages/landingpages/landingpages';
import { AppHome } from './pages/app-home/app-home';
import { Signin } from './pages/signin/signin';

// export const routes: Routes = [];
export const routes: Routes = [
  { path: '', component: Landingpages },
  { path: 'app.home', component: AppHome},
  { path: 'signin', component: Signin },
];


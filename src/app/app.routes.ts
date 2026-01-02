import { Routes } from '@angular/router';
import { Landingpages } from './pages/landingpages/landingpages';
import { AppHome } from './pages/app-home/app-home';
import { Signin } from './pages/signin/signin';
import { Help } from './pages/help/help';

// export const routes: Routes = [];
export const routes: Routes = [
  // PUBLIC
  { path: '', component: Landingpages },
  // AUTH
  { path: 'signin', component: Signin },
  // APP SHELL
  { path: 'app.home', component: AppHome,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard').then((m) => m.Dashboard) },
      { path: 'vaults', loadComponent: () => import('./pages/vaults/vaults').then((m) => m.Vaults) },
      { path: 'proposals', loadComponent: () => import('./pages/proposals/proposals').then((m) => m.Proposals) },
      { path: 'loan', loadComponent: () => import('./pages/loan/loan').then((m) => m.Loan) },
      { path: 'reports',  loadComponent: () => import('./pages/reports/reports').then((m) => m.Reports) },
      { path: 'settings', loadComponent: () => import('./pages/settings/settings').then((m) => m.Settings) },
      { path: 'help', loadComponent: () => import('./pages/help/help').then((m) => m.Help)},
    ],
  },
];

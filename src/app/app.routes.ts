import { Routes } from '@angular/router';
import { Landingpages } from './pages/landingpages/landingpages';
import { AppHome } from './pages/app-home/app-home';
import { Signin } from './pages/signin/signin';
import {Register} from './pages/register/register';
import { AdminShell } from './admin/admin-shell/admin-shell';


// export const routes: Routes = [];
export const routes: Routes = [
  // PUBLIC
  { path: '', component: Landingpages },
  // AUTH
  { path: 'signin', component: Signin },
  { path: 'register', component: Register },
  // ADMIN SHELL
  { path: 'admin', component: AdminShell,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadComponent: () => import('./admin/pages/dashboard/dashboard').then((m) => m.AdminDashboard) },
      { path: 'users', loadComponent: () => import('./admin/pages/users/users').then((m) => m.Users) },
      { path: 'kyc', loadComponent: () => import('./admin/pages/kyc/kyc').then((m) => m.Kyc) },
      { path: 'transactions', loadComponent: () => import('./admin/pages/transactions/transactions').then((m) => m.Transactions) },
      { path: 'credit', loadComponent: () => import('./admin/pages/credit/credit').then((m) => m.Credit) },
      {path:'user-create', loadComponent:() => import('./admin/pages/users/user-create/user-create').then((m) => m.UserCreate) },
      {path:'user-detail', loadComponent:() => import('./admin/pages/users/user-detail/user-detail').then((m) => m.UserDetail) },
    ],
  },
  // APP SHELL
  { path: 'app', component: AppHome,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard').then((m) => m.Dashboard) },
      { path: 'vaults', loadComponent: () => import('./pages/vaults/vaults').then((m) => m.Vaults) },
      { path: 'proposals', loadComponent: () => import('./pages/proposals/proposals').then((m) => m.Proposals) },
      { path: 'trustpulse', loadComponent: () => import('./pages/trustpulse/trustpulse').then((m) => m.Trustpulse)},
      { path: 'loan', loadComponent: () => import('./pages/loan/loan').then((m) => m.Loan) },
      { path: 'reports',  loadComponent: () => import('./pages/reports/reports').then((m) => m.Reports) },
      { path: 'settings', loadComponent: () => import('./pages/settings/settings').then((m) => m.Settings) },
      { path: 'help', loadComponent: () => import('./pages/help/help').then((m) => m.Help)},
    ],
  },
];

import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import {Features} from './components/features/features';
import {Pricing} from './components/pricing/pricing';
// export const routes: Routes = [];
export const routes: Routes = [
  { path: '', component: Home },
  { path: 'feature', component: Features },
  { path: 'pricing', component: Pricing }
];


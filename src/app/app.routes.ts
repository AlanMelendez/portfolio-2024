import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},


  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**',  redirectTo: '/home'},

  // {path: '**', component: PageNotFoundComponent},
];

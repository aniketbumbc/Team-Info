import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{TeamsComponent} from '../app/teams/teams.component';
import{TeamDetailsComponent} from  '../app/team-details/team-details.component';
import{DashboardComponent} from '../app/dashboard/dashboard.component';

const routes: Routes = [
  {path:'teams',component:TeamsComponent},
  {path:'dashboard',component:DashboardComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { OrgPanelComponent } from './org-panel/org-panel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthpageComponent } from './authpage/authpage.component';
import { RegpageComponent } from './regpage/regpage.component';

const routes: Routes = [
  { path: 'users', component: UserPanelComponent},
  { path: 'orgs', component: OrgPanelComponent},
  { path: 'dash', component: DashboardComponent},
  { path: 'login', component: AuthpageComponent},
  { path: 'register', component: RegpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

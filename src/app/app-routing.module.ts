import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthpageComponent } from './authpage/authpage.component';
import { RegpageComponent } from './regpage/regpage.component';
import { OrgPageComponent } from './org-page/org-page.component';

const routes: Routes = [
  { path: 'users', component: UserPanelComponent},
  { path: 'org/:uid', component: OrgPageComponent},
  { path: 'dash', component: DashboardComponent},
  { path: 'login', component: AuthpageComponent},
  { path: 'register', component: RegpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

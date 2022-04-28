import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthpageComponent } from './authpage/authpage.component';
import { RegpageComponent } from './regpage/regpage.component';
import { OrgPageComponent } from './org-page/org-page.component';
import { UserbioComponent } from './userbio/userbio.component';
import { MinuteEditorComponent } from './minute-editor/minute-editor.component';
import { AddOrgPageComponent } from './add-org-page/add-org-page.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const routes: Routes = [
  { path: 'users', component: UserPanelComponent},
  { path: 'org/:uid', component: OrgPageComponent},
  { path: 'dash', component: DashboardComponent},
  { path: 'login', component: AuthpageComponent},
  { path: 'register', component: RegpageComponent},
  { path: 'usr/:mode/:uid', component: UserbioComponent},
  { path: 'min/:mode/:id', component: MinuteEditorComponent},
  { path: 'register/join', component: AddOrgPageComponent},
  { path: '', component: WelcomePageComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

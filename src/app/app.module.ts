import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { OrgPanelComponent } from './org-panel/org-panel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrgPageComponent } from './org-page/org-page.component';
import { AuthpageComponent } from './authpage/authpage.component';
import { RegpageComponent } from './regpage/regpage.component';
import { UserbioComponent } from './userbio/userbio.component';

@NgModule({
  declarations: [
    AppComponent,
    UserPanelComponent,
    OrgPanelComponent,
    DashboardComponent,
    CreateUserComponent,
    LoginFormComponent,
    RegisterFormComponent,
    NavbarComponent,
    OrgPageComponent,
    AuthpageComponent,
    RegpageComponent,
    UserbioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

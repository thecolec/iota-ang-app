import { EventEmitter, Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

import { JwtHelperService } from '@auth0/angular-jwt';

import { AuthUser, NewUser, User } from './user';

import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  isLoggedIn: boolean;

  private currentUser = {};

  // Async observable field exports
  public loginStateObs = new BehaviorSubject<boolean>(this.checkLoginState());

  private jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient,) { 
  }


  login(user: AuthUser) {
    return this.http.post(environment.apiURL+'/auth/login', user).subscribe((res: any) => {
      this.currentUser = this.jwtHelper.decodeToken(res.token);
      console.log(this.jwtHelper.decodeToken(res.token));
      localStorage.setItem('logged-in', "1");
      this.loginStateObs.next(true);
    });
  }

  register(user: NewUser){
    return this.http.post(environment.apiURL+'/auth/reg',user).subscribe((res: any) => {
      this.currentUser = this.jwtHelper.decodeToken(res.token);
      console.log(res);
    });
  }

  checkLoginState(): boolean{
    var chk = localStorage.getItem('logged-in');
    if(chk == "1"){
      return true;
    } else {
      return false;
    }
    
  }

  get loginStateCheck(){
    return this.loginStateObs.asObservable();
  }
  



}

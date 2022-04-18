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

  private jwtHelper = new JwtHelperService();

  // Async observable field exports
  public loginStateObs = new BehaviorSubject<boolean>(this.checkLoginState());
  public userDoc = new BehaviorSubject<User>(this.readUserDoc());

  

  constructor(private http: HttpClient,) { 
  }


  login(user: AuthUser) {
    return this.http.post(environment.apiURL+'/auth/login', user).subscribe((res: any) => {
      console.log(this.jwtHelper.decodeToken(res.token));
      localStorage.setItem('logged-in', "1");
      localStorage.setItem('token',res.token);
      this.loginStateObs.next(true);
      this.userDoc.next(this.readUserDoc());
    });
  }

  logout(){
    localStorage.setItem('logged-in', "0");
    if(localStorage.getItem('token') !== null) {localStorage.removeItem('token')}
    this.loginStateObs.next(false);
    this.userDoc.next(this.readUserDoc());
  }

  register(user: NewUser){
    return this.http.post(environment.apiURL+'/auth/reg',user).subscribe((res: any) => {
      localStorage.setItem('logged-in', "1");
      localStorage.setItem('token',res.token);
      this.loginStateObs.next(true);
      this.userDoc.next(this.readUserDoc());
      console.log(res);
    });
  }

  checkLoginState(): boolean{

    //TODO: Set login state using user doc presence
    var chk = localStorage.getItem('logged-in');
    if(chk == "1"){
      return true;
    } else {
      return false;
    }
    
  }

  readUserDoc(): User{
    
    try {
      if(localStorage.getItem('token') === null ){return new User("","","","",0,[]);}
      //console.log(this.jwtHelper.decodeToken<User>(localStorage.getItem('token')|| '{}'));
      return this.jwtHelper.decodeToken<User>(localStorage.getItem('token') || '{}');
    } catch (error) {
      console.log(error);
      return new User("","","","",0,[]);
    }
  }

  checkAdmin(): boolean{
    var num;
    this.userInfo.subscribe(doc => num = doc.rank);
    return num === 3;
  }

  // GET's

  get loginStateCheck(){
    return this.loginStateObs.asObservable();
  }

  get userInfo(){
    return this.userDoc.asObservable();
  }


}

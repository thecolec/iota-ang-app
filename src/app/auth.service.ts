import { EventEmitter, Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

import { JwtHelperService } from '@auth0/angular-jwt';

import { AuthUser, NewUser, User } from './user';

import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // tracks user login state
  isLoggedIn: boolean;

  // swap variable for current user document
  private currentUser = {};

  // imports the Auth0/JWTHelper library
  private jwtHelper = new JwtHelperService();

  // Async observable field exports
  public loginStateObs = new BehaviorSubject<boolean>(this.checkLoginState());
  public userDoc = new BehaviorSubject<User>(this.readUserDoc());

  

  constructor(private http: HttpClient,) { 
  }

  // Handles authentication given an AuthUser type object. 
  login(user: AuthUser) {
    
    // Make post request to /auth/login with authentication data.
    // returns a success state if the post request and its callback function are successful.
    return this.http.post(environment.apiURL+'/auth/login', user).subscribe((res: any) => {
      
      // if there is a token error run logout to ensure the application state is clear.
      if(res.token.Error){this.logout(); return;}

      // log the usertoken for debug usage.
      console.log(this.jwtHelper.decodeToken(res.token));

      // store the login state to the browsers local storage
      localStorage.setItem('logged-in', "1");

      // store the received token to the browsers local storage
      localStorage.setItem('token',res.token);

      // advance the userDoc and loginState observables.
      this.loginStateObs.next(true);
      this.userDoc.next(this.readUserDoc());
    });
  }

  // Resets login state and clears token from local storage.
  logout(){
    // Set login state to 0
    localStorage.setItem('logged-in', "0");
    
    // remove token from localstorage if it exists.
    if(localStorage.getItem('token') !== null) {localStorage.removeItem('token')}

    // advance userDoc and loginState observables.
    this.loginStateObs.next(false);
    this.userDoc.next(this.readUserDoc());
  }

  // Submits a new user registration and logs in
  register(user: NewUser){
    
    // Make POST request containing new user data.
    // returns success state if post request and callback are successful.
    return this.http.post(environment.apiURL+'/auth/reg',user).subscribe((res: any) => {

      // set login state to 1 and add received token to local storage.
      localStorage.setItem('logged-in', "1");
      localStorage.setItem('token',res.token);

      // advance loginState and userDoc observables
      this.loginStateObs.next(true);
      this.userDoc.next(this.readUserDoc());
    });
  }


  // Retrieves new token from server.
  // Necessary when there are updates to the users groups or bio.
  refresh() {

    //Make get request for new token.
    return this.http.get(environment.apiURL+'/auth/update').subscribe((res: any) => {

      // ensure the login state and token are up to date.
      localStorage.setItem('logged-in', "1");
      localStorage.setItem('token',res);

      // advance loginState and userDoc observables.
      this.loginStateObs.next(true);
      this.userDoc.next(this.readUserDoc());
    });
  }

  // converts local storage integer representation of login state to a boolean type.
  checkLoginState(): boolean{

    //TODO: Set login state using user doc presence
    var chk = localStorage.getItem('logged-in');
    if(chk == "1"){
      return true;
    } else {
      return false;
    }
    
  }

  // decodes token from localstorage and returns a User type object.
  readUserDoc(): User{
    try {
      // If no token return empty User object.
      if(localStorage.getItem('token') === null ){return new User("","","","",0,[]);}

      // Otherwise return decoded User object.
      return this.jwtHelper.decodeToken<User>(localStorage.getItem('token') || '{}');
    } catch (error) {

      // If there is a token error log error and return an empty User type object.
      console.log(error);
      console.log(localStorage.getItem('token'));
      return new User("","","","",0,[]);
    }
  }

  // For future use. returns boolean reflecting users admin status.
  checkAdmin(): boolean{
    var num;
    this.userInfo.subscribe(doc => num = doc.rank);
    return num === 3;
  }

  // GET's
  // in typescript, these are functions that easily return variables in a protected way.
  // in angular they are needed to make observables more reliable.
  get loginStateCheck(){
    return this.loginStateObs.asObservable();
  }

  get userInfo(){
    return this.userDoc.asObservable();
  }


}

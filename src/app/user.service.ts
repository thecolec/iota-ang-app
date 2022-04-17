import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, of } from 'rxjs';

import { User } from './user';
import { Organization } from './organization';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private iotaAuth: AuthService
  ) { }

  private url = environment.apiURL;

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url+'/usr/list');
  }

  getOrgs(): Observable<Organization[]> {
    return this.http.get<Organization[]>(this.url+'/org/list');
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.url+'/usr/add', user);
  }

}



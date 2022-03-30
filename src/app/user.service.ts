import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { User } from './user';
import { Organization } from './organization';

import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
  ) { }

  private url = 'http://localhost:3000';

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url+'/users');
  }

  getOrgs(): Observable<Organization[]> {
    return this.http.get<Organization[]>(this.url+'/orgs');
  }
}



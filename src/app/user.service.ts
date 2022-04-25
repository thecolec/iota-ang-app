import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, of } from 'rxjs';

import { User } from './user';
import { Organization, OrganizationVerbose } from './organization';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { Minutes } from './minutes';



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
  getOrgSpec(oid: string): Observable<OrganizationVerbose> {
    return this.http.get<OrganizationVerbose>(this.url+'/org/s/'+oid+'/full');
  }

  getUserVerb(uid: string): Observable<User> {
    return this.http.get<User>(this.url+'/usr/s/'+uid);
  }

  getMinutes(): Observable<Minutes[]> {
    return this.http.get<Minutes[]>(this.url+'/min/');
  }

  isMe(user: User): boolean {
    if(user._id === this.iotaAuth.readUserDoc()._id) return true;
    return false;
  }
  
}



import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, of } from 'rxjs';

import { User, VerboseUser} from './user';
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

  // User Functions
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url+'/usr/list');
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.url+'/usr/add', user);
  }

  getUserVerb(uid: string): Observable<VerboseUser> {
    return this.http.get<VerboseUser>(this.url+'/usr/s/'+uid);
  }

  // Organization Functions
  getOrgs(): Observable<Organization[]> {
    return this.http.get<Organization[]>(this.url+'/org/list');
  }

  getOrgSpec(oid: string): Observable<OrganizationVerbose> {
    return this.http.get<OrganizationVerbose>(this.url+'/org/s/'+oid+'/full');
  }

  getRegCode(oid: string): Observable<string> {
    return this.http.get<string>(this.url+'/org/reg/'+oid);
  }

  joinOrg(regcode: string): void {
    this.http.post(this.url+'/org/reg/'+regcode, {}).subscribe((res: any) => {
      console.log(res);
    })
  }

  // Minutes Functions
  getMinutes(oid: string): Observable<Minutes[]> {
    console.log(oid);
    return this.http.get<Minutes[]>(this.url+'/min/org/'+oid);
  }

  getMinutesSpec(id: string): Observable<Minutes> {
    console.log(this.url+'/min/s/'+id);
    return this.http.get<Minutes>(this.url+'/min/s/'+id);
  }

  putMinutes(doc: Minutes): void {
    this.http.post(this.url+'/min/new',doc).subscribe((res: any) => {
      console.log(res);
    })
  }

  // Internal Functions
  isMe(user: User): boolean {
    if(user._id === this.iotaAuth.readUserDoc()._id) return true;
    return false;
  }
  
}



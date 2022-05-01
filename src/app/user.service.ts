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

  // Compile time feature. Sets url string to match a definied environment variable.
  // localhost for local development
  // iotaEngine AWS IP for production.
  private url = environment.apiURL;

  // ===== User Functions =====

  // makes API call to retrieve user list
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url+'/usr/list');
  }

  // makes API call to add a new user.
  // Depricated, used during testing. Included here for demonstration.
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.url+'/usr/add', user);
  }

  // Requests verbose user information from API server
  getUserVerb(uid: string): Observable<VerboseUser> {
    return this.http.get<VerboseUser>(this.url+'/usr/s/'+uid);
  }

  // Sets verbose user infromation on API server
  setUserInfo(user: VerboseUser): void {
    this.http.post(this.url+'/usr/edit/'+user._id, user).subscribe((res: any) => {
      console.log(res);
    })
  }

  // ===== Organization Functions =====

  // retrieves array of Organizations from API server
  getOrgs(): Observable<Organization[]> {
    return this.http.get<Organization[]>(this.url+'/org/list');
  }

  // retrieves verbose information for a specific organization from API server
  getOrgSpec(oid: string): Observable<OrganizationVerbose> {
    return this.http.get<OrganizationVerbose>(this.url+'/org/s/'+oid+'/full');
  }

  // retrieves most recent registration code from API server
  getRegCode(oid: string): Observable<string> {
    return this.http.get<string>(this.url+'/org/reg/'+oid);
  }

  // POSTs registration code to API server to join organization
  joinOrg(regcode: string): void {
    this.http.post(this.url+'/org/reg/'+regcode, {}).subscribe((res: any) => {
      console.log(res);
      this.iotaAuth.refresh();
    })
  }

  // ===== Minutes Functions =====

  // retrieves list of minutes by organization ID from API
  getMinutes(oid: string): Observable<Minutes[]> {
    console.log(oid);
    return this.http.get<Minutes[]>(this.url+'/min/org/'+oid);
  }

  // retrieves specific minutes from API using minutes document ID
  getMinutesSpec(id: string): Observable<Minutes> {
    console.log(this.url+'/min/s/'+id);
    return this.http.get<Minutes>(this.url+'/min/s/'+id);
  }

  // POSTs new minutes to API server
  putMinutes(doc: Minutes): void {
    this.http.post(this.url+'/min/new',doc).subscribe((res: any) => {
      console.log(res);
    })
  }

  // ===== Internal Functions =====
  // validates that current user matches provided User type object. 
  isMe(user: User): boolean {
    if(user._id === this.iotaAuth.readUserDoc()._id) return true;
    return false;
  }
  
}



import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { min } from 'rxjs';
import { AuthService } from '../auth.service';
import { Minutes, MinutesObj } from '../minutes';
import { Organization, OrganizationVerbose } from '../organization';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-org-page',
  templateUrl: './org-page.component.html',
  styleUrls: ['./org-page.component.scss']
})
export class OrgPageComponent implements OnInit {

  constructor(private iotaAPI: UserService, private route: ActivatedRoute, private iotaAuth: AuthService) {
    
   }
  
  org: OrganizationVerbose;
  regCode: string;
  

  ngOnInit(): void {
    // Set OID from route parameter
    const oid = this.route.snapshot.paramMap.get('uid');
    
    // retrieve regcode and verbose org doc if oid is provided.
    this.getOrgDetails(oid || "");
    this.getRegCode(oid || "");
    
  }

  // Subscribes to verbose organization document using UserService
  getOrgDetails(oid: string): void {
    this.iotaAPI.getOrgSpec(oid).subscribe(doc => this.org = doc);
  }

  // Returns human readable date.
  getDate(): string {
    const datePipe = new DatePipe('en-US');
    const date = datePipe.transform(this.org.created, 'MM/dd/yy');
    return date || "";
  }
  
  // Returns organization ID, and "" if there is an error.
  getOID(): string {
    return this.route.snapshot.paramMap.get('uid') || "";
  }

  // Returns organization Name, and "Unnamed Org" if there is an error.
  getName(): string {
    return this.org.Name || "Unnamed Org";
  }

  // User UserService to retrieve most recent Registration Code
  getRegCode(oid: string): void {
    this.iotaAPI.getRegCode(oid).subscribe(res => this.regCode = res);
  }
}

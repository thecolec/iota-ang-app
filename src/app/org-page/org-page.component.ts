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
    const oid = this.route.snapshot.paramMap.get('uid');
    this.getOrgDetails(oid || "");
    this.getRegCode(oid || "");
    
  }

  getOrgDetails(oid: string): void {
    this.iotaAPI.getOrgSpec(oid).subscribe(doc => this.org = doc);
  }

  getDate(): string {
    const datePipe = new DatePipe('en-US');
    const date = datePipe.transform(this.org.created, 'MM/dd/yy');
    return date || "";
  }
  
  getOID(): string {
    return this.route.snapshot.paramMap.get('uid') || "";
  }

  getName(): string {
    return this.org.Name || "Unnamed Org";
  }

  

  getRegCode(oid: string): void {
    this.iotaAPI.getRegCode(oid).subscribe(res => this.regCode = res);
  }

  // Groundwork for dynamic form
  // genTemplate() : Minutes {
  //   const usrDoc: User = this.iotaAuth.readUserDoc();
  //   const doc = new MinutesObj(
  //     "",
  //     "",
  //     "",
  //     "",
  //     usrDoc
  //   );
  //   return doc;
  // }

}

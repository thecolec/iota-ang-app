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
  styleUrls: ['./org-page.component.sass']
})
export class OrgPageComponent implements OnInit {

  constructor(private iotaUser: UserService, private route: ActivatedRoute, private iotaAuth: AuthService) { }
  
  org: OrganizationVerbose;
  

  ngOnInit(): void {
    const uid = this.route.snapshot.paramMap.get('uid');
    this.getOrgDetails(uid || "");
  }

  getOrgDetails(uid: string): void {
    this.iotaUser.getOrgSpec(uid).subscribe(doc => this.org = doc);
  }

  getDate(): string {
    return this.org.created;
  }
  getOID(): string {
    return this.route.snapshot.paramMap.get('uid') || "";
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

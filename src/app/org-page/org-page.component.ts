import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Organization, OrganizationVerbose } from '../organization';
import { UserService } from '../user.service';

@Component({
  selector: 'app-org-page',
  templateUrl: './org-page.component.html',
  styleUrls: ['./org-page.component.sass']
})
export class OrgPageComponent implements OnInit {

  constructor(private iotaUser: UserService, private route: ActivatedRoute) { }
  
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

}

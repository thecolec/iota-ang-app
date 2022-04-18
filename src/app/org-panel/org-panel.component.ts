import { Component, Input, OnInit } from '@angular/core';
import { Organization } from '../organization';

import { UserService } from '../user.service';

@Component({
  selector: 'app-org-panel',
  templateUrl: './org-panel.component.html',
  styleUrls: ['./org-panel.component.sass']
})
export class OrgPanelComponent implements OnInit {

  @Input() orgs: Organization[];

  constructor(private iotaApi: UserService) { }

  ngOnInit(): void {
    // this.getOrgs();
  }

  

}

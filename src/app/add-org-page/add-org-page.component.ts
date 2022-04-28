import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-org-page',
  templateUrl: './add-org-page.component.html',
  styleUrls: ['./add-org-page.component.sass']
})
export class AddOrgPageComponent implements OnInit {

  constructor(private iotaAPI: UserService) { }

  regCode: string;

  ngOnInit(): void {
  }

  joinOrg(): void {
    this.iotaAPI.joinOrg(this.regCode);
  }

}

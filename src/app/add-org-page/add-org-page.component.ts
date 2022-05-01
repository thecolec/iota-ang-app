// Cole Cassidy
// Iota - 2022

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-org-page',
  templateUrl: './add-org-page.component.html',
  styleUrls: ['./add-org-page.component.scss']
})
export class AddOrgPageComponent implements OnInit {

  constructor(private iotaAPI: UserService, private iotaAuth: AuthService) { }

  regCode: string;

  ngOnInit(): void {
  }

  // submit button executes this function
  // instructs the UserService to execute the joinOrg API Call
  joinOrg(): void {
    this.iotaAPI.joinOrg(this.regCode);
    
  }

}

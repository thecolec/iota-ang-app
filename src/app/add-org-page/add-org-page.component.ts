import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-org-page',
  templateUrl: './add-org-page.component.html',
  styleUrls: ['./add-org-page.component.sass']
})
export class AddOrgPageComponent implements OnInit {

  constructor(private iotaAPI: UserService, private iotaAuth: AuthService) { }

  regCode: string;

  ngOnInit(): void {
  }

  joinOrg(): void {
    this.iotaAPI.joinOrg(this.regCode);
    
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Organization } from '../organization';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  constructor(private iotaAuth: AuthService, private iotaApi: UserService) {
  }

  whoami: User;

  ngOnInit(): void {
    this.iotaAuth.userInfo.subscribe(user => this.whoami = user);
  }


}

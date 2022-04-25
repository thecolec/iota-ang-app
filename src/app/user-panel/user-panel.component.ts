import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { USERS } from "../mock-users";
import { User } from '../user';

import { UserService } from '../user.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.sass']
})
export class UserPanelComponent implements OnInit {

  @Input() users: User[];

  constructor(private userService: UserService, private iotaAuth: AuthService) { 
  }

  ngOnInit(): void {
    // this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  isMe(user: User): boolean {
    return this.userService.isMe(user);
  }

}



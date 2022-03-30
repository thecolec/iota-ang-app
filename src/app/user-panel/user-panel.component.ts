import { Component, OnInit } from '@angular/core';
import { USERS } from "../mock-users";
import { User } from '../user';

import { UserService } from '../user.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.sass']
})
export class UserPanelComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) { 
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

}



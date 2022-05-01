import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.sass']
})
export class UserPanelComponent implements OnInit {

  // Use input array of User type objects.
  @Input() users: User[];

  constructor(private userService: UserService, private iotaAuth: AuthService) { 
  }

  ngOnInit(): void {
    // this.getUsers();
  }

  // use UserService to determine if a listed user is the current user.
  isMe(user: User): boolean {
    return this.userService.isMe(user);
  }

}



import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.sass']
})
export class CreateUserComponent implements OnInit {

  constructor(private iotaAPI: UserService) { }

  model = new User("0", "", "", "", 0, []);

  ngOnInit(): void {
  }

  onSubmit() {
  }

  newUser() {
    this.iotaAPI.addUser(this.model).subscribe();
  }

}

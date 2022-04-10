import { Component, OnInit } from '@angular/core';

import { NewUser } from '../user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass']
})
export class LoginFormComponent implements OnInit {

  constructor() { }

  model = new NewUser("0", "", "", "", "")

  ngOnInit(): void {
  }

  onSubmit() {
  }

  newUser() {
  }

}

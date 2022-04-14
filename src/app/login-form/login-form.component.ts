import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

import { AuthUser } from '../user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass']
})
export class LoginFormComponent implements OnInit {

  constructor(private iotaAuthAPI: AuthService) { }

  model = new AuthUser("", "")

  ngOnInit(): void {
  }

  onSubmit() {
  }

  newUser() {
    return this.iotaAuthAPI.login(this.model);
  }

}

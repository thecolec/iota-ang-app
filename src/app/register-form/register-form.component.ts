import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

import { NewUser } from '../user';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.sass']
})
export class RegisterFormComponent implements OnInit {

  constructor(private iotaAuthAPI: AuthService) {}

  // Create new model to bind to form
  model = new NewUser("0", "", "", "", "")

  ngOnInit(): void {
  }

  onSubmit() {
  }

  // submit filled model to AuthService for API post.
  newUser() {
    this.iotaAuthAPI.register(this.model);
  }

}

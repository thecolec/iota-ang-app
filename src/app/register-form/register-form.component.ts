import { Component, OnInit } from '@angular/core';

import { NewUser } from '../user';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.sass']
})
export class RegisterFormComponent implements OnInit {

  constructor() { }

  model = new NewUser("0", "", "", "", "")

  ngOnInit(): void {
  }

  onSubmit() {
  }

  newUser() {
  }

}

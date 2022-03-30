import { Component, OnInit } from '@angular/core';
import { USERS } from "../mock-users";

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.sass']
})
export class UserPanelComponent implements OnInit {

  users = USERS;

  constructor() { 
  }

  ngOnInit(): void {
  }

}



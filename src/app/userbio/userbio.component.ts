import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-userbio',
  templateUrl: './userbio.component.html',
  styleUrls: ['./userbio.component.sass']
})
export class UserbioComponent implements OnInit {

  @Input() user: User;
  
  constructor() {

  }

  ngOnInit(): void {
  }

}

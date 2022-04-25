import { Component, Input, OnInit } from '@angular/core';
import { Minutes } from '../minutes';
import { UserService } from '../user.service';

@Component({
  selector: 'app-minutes-panel',
  templateUrl: './minutes-panel.component.html',
  styleUrls: ['./minutes-panel.component.sass']
})
export class MinutesPanelComponent implements OnInit {

  @Input() oid: string;
  minutes: Minutes[];

  constructor(private iotaApi: UserService) { }

  ngOnInit(): void {
    this.getMinutes();
  }

  getMinutes(): void {
    this.iotaApi.getMinutes().subscribe(doc => this.minutes = doc);
  }

}

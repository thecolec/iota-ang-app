import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private iotaApi: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const oid = this.route.snapshot.paramMap.get('uid') || "";
    this.getMinutes(oid);
  }

  getMinutes(oid: string): void {
    this.iotaApi.getMinutes(oid).subscribe(doc => this.minutes = doc);
  }

}

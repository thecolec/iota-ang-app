import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VerboseUser } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userbio',
  templateUrl: './userbio.component.html',
  styleUrls: ['./userbio.component.sass']
})

export class UserbioComponent implements OnInit {

  @Input() user: VerboseUser;

  private mode: number = 0;
  
  constructor(
    private iotaUser: UserService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.mode = Number(this.route.snapshot.paramMap.get('mode'));
    const uid = this.route.snapshot.paramMap.get('uid');
    this.getUserInfo(uid || "");
  }

  getUserInfo(uid: string): void {
    this.iotaUser.getUserVerb(uid).subscribe(doc => this.user = doc);
  }

  getDate(): string {
    const datePipe = new DatePipe('en-US');
    const date = datePipe.transform(this.user.joindate, 'MM/dd/yy');
    return date || "";
  } 

  getMode(): number {
    return this.mode;
  }

  // Writing Functions

  setUserInfo(): void {
    this.iotaUser.setUserInfo(this.user);
  }

}

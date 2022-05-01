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

  // Allow loading component to provide user template
  @Input() user: VerboseUser;

  private mode: number = 0;
  
  constructor(
    private iotaUser: UserService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // set mode and UID to match the route parameters
    this.mode = Number(this.route.snapshot.paramMap.get('mode'));
    const uid = this.route.snapshot.paramMap.get('uid');

    // retrieve userinfo for given UID
    this.getUserInfo(uid || "");
  }

  // Use UserService to retrieve User information.
  getUserInfo(uid: string): void {
    this.iotaUser.getUserVerb(uid).subscribe(doc => this.user = doc);
  }

  // Return human-readable date string.
  getDate(): string {
    const datePipe = new DatePipe('en-US');
    const date = datePipe.transform(this.user.joindate, 'MM/dd/yy');
    return date || "";
  } 

  // Returns mode
  getMode(): number {
    return this.mode;
  }

  // Use UserService to submit changes to API
  setUserInfo(): void {
    this.iotaUser.setUserInfo(this.user);
  }

}

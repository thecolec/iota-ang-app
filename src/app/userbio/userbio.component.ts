import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userbio',
  templateUrl: './userbio.component.html',
  styleUrls: ['./userbio.component.sass']
})
export class UserbioComponent implements OnInit {

  @Input() user: User;
  
  constructor(
    private iotaUser: UserService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const uid = this.route.snapshot.paramMap.get('uid');
    this.getUserInfo(uid || "");
  }

  getUserInfo(uid: string): void {
    this.iotaUser.getUserVerb(uid).subscribe(doc => this.user = doc);
  }

}

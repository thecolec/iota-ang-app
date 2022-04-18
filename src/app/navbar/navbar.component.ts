import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  
  constructor(private iotaAuth: AuthService) {
    
  }
  
  loginState$ : Observable<boolean>;
  currUser$: Observable<User>;
  

  title = "Iota (beta)";
  Name = "";

  ngOnInit() {
    this.loginState$ = this.iotaAuth.loginStateCheck;
    this.iotaAuth.userInfo.subscribe(user => this.Name = user.uName);
    
  }


  logout(){
    this.iotaAuth.logout();
  }

}

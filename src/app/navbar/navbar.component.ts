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
  
  // Create observable variables for the navbar template to subscribe to.
  loginState$ : Observable<boolean>;
  currUser$: Observable<User>;
  

  title = "Iota (beta)";
  Name = "";

  ngOnInit() {
    // Subscribe to the loginState provided via AuthService
    this.loginState$ = this.iotaAuth.loginStateCheck;

    // Subscribe to the user document via AuthService and assign username to Name field.
    this.iotaAuth.userInfo.subscribe(user => this.Name = user.uName);
    
  }

  // Use logout method provided by AuthService when user clicks logout button.
  logout(){
    this.iotaAuth.logout();
  }

}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  
  constructor(private iotaAuth: AuthService) {
    
  }
  
  loginState$ : Observable<boolean>;
  

  title = "Iota";

  ngOnInit() {
    this.loginState$ = this.iotaAuth.loginStateCheck;
  }

  logout(){
    localStorage.setItem('logged-in', "0");
    this.iotaAuth.loginStateObs.next(false);
  }

}

import { Component, OnInit } from '@angular/core';    
import { Users } from '../Users'  
import { Router } from '@angular/router';  
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { LoginService } from '../services/login.service';
@Component({  
  selector: 'app-dashboard',  
  templateUrl: './dashboard.component.html',  
  styleUrls: ['./dashboard.component.scss']  
})  
export class DashboardComponent implements OnInit {  
  socialusers:Users;  
  constructor(public OAuth: LoginService,     private router: Router) { }  

  ngOnInit() {  
    this.socialusers = JSON.parse(localStorage.getItem('Users'));  
    console.log(this.socialusers);  
  }  
  logout() {  
   alert(1);  
  //  localStorage.removeItem('Users');
    this.OAuth.signOut();
  }  

  refreshToken(){
    this.OAuth.refreshAuthToken();  
    console.log(this.socialusers.authToken);
  }

}  
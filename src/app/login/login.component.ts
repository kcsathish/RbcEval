import { Component, OnInit } from '@angular/core';  
import { Users } from '../Users'  
import { Router, ActivatedRoute, Params } from '@angular/router';  
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { LoginService } from '../services/login.service';
@Component({  
  selector: 'app-login',  
  templateUrl: './login.component.html',  
  styleUrls: ['./login.component.scss']  
})  
export class LoginComponent implements OnInit {  
  response;  
    users=new Users();  
  constructor(  
   
    private SocialloginService: LoginService,  
    private router: Router  
  ) { }  

  ngOnInit() {  
  }  
  public socialSignIn(socialProvider: string) {  
    let socialPlatformProvider;  
   
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;       
      
      this.SocialloginService.signIn().then(users => {          
      this.router.navigate([`/Dashboard`]);
    });  
  }  
  
}  
import { Injectable } from '@angular/core';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';

@Injectable()

export class LoginService {
  socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;  

  constructor( public OAuth: SocialAuthService) { }

  signIn(){
   return this.OAuth.signIn(this.socialPlatformProvider, {scope: 'profile email'}).then(users => {  
      localStorage.setItem('Users', JSON.stringify( users));  
    });  
   
  }

  signOut(){
    return this.OAuth.signOut().then(users => {  
      localStorage.removeItem('Users');
    });  
  }

  refreshAuthToken() {
  return this.OAuth.refreshAuthToken(this.socialPlatformProvider).then(users => {  
      localStorage.setItem('Users', JSON.stringify( users));  
    });  
  }
}

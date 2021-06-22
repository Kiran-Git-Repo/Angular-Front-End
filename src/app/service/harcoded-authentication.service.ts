import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HarcodedAuthenticationService {

  constructor() { }

  authenticationService(username,password){
    if(username==="superuser" && password==='dummy'){
      sessionStorage.setItem('authenticateduser',username);
      return true;
    }
    else{
      false;
    }

  }

  isUserLoggedIn(){
    let user=sessionStorage.getItem('authenticateduser')
    return !(user===null)
  }

  logout(){
    sessionStorage.removeItem('authenticateduser');
  }

}

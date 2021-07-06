import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
export const TOKEN='authtoken';
export const AUTHUSER='authenticateduser';
import {LOCAL_URL,LOCAL_URL_Jpa,HEROKU_URL} from  './../app.constants';
@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http:HttpClient) { }

  // authenticationService(username,password){
  //   if(username==="superuser" && password==='dummy'){
  //     sessionStorage.setItem('authenticateduser',username);
  //     return true;
  //   }
  //   else{
  //     false;
  //   }

  // }

  executeJWTService(username,password){
    return this.http.post<any>(`https://spring-backend-todo.herokuapp.com/authenticate`,{

   username,
   password
   }).pipe(
     map(
         data=>{
          sessionStorage.setItem(AUTHUSER,username);
          sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
          return data;
       }
     )
   );
   
  }

  executeAuthenticationService(username,password){
    let basicAuthEncodedHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    let headers = new HttpHeaders(
      {
        Authorization: basicAuthEncodedHeaderString
      }
    )
      
   return this.http.get<AuthenticationBean>(`http://localhost:8080/basicauth`
   ,{headers}).pipe(
     map(
         data=>{
          sessionStorage.setItem(AUTHUSER,username);
          sessionStorage.setItem(TOKEN,basicAuthEncodedHeaderString);
          return data;
       }
     )
   );
   
  }
  getAuthenticatedUser(){
    return sessionStorage.getItem('authenticateduser')
   
  }
  getAuthenticatedToken(){
    if(this.getAuthenticatedUser())
      return sessionStorage.getItem('authtoken')
   
  }

  isUserLoggedIn(){
    let user=sessionStorage.getItem('authenticateduser')
    return !(user===null)
  }
  
  logout(){
    sessionStorage.removeItem('authenticateduser');
    sessionStorage.removeItem('authtoken');
  }
}
export class AuthenticationBean{
  constructor(private message : String){

  }
}
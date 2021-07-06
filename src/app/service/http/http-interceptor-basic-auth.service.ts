import { HttpInterceptor,HttpRequest,HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicAuthenticationService } from '../Basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor(private basicAuth:BasicAuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler){
  // let username='superuser'
  // let password='dummy'
  // let basicAuthEncodedString = 'Basic ' + window.btoa(username + ':' + password);
  let basicAuthEncodedString =this.basicAuth.getAuthenticatedToken();
  let username=this.basicAuth.getAuthenticatedUser();

  if(basicAuthEncodedString && username){
  request=request.clone({
    setHeaders : {
      Authorization : basicAuthEncodedString
    }
  })}
  return next.handle(request)
  }
}

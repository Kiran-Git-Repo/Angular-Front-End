import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {
 

  constructor(private http:HttpClient) { }

  getHelloWorldMessage(){
    //console.log('Hellow from service')
   return this.http.get('https://springheroku-test.herokuapp.com/',{responseType:'text'});
   //return this.http.get('http://localhost:8080/');
  }

  getMessageWithPathVariable(name){
    return this.http.get(`https://springheroku-test.herokuapp.com/message/${name}`,{responseType:'text'});

  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HarcodedAuthenticationService} from './../service/harcoded-authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Username = 'default'
  password = ''
  ErrorMessage='Invalid Credentials'
  renderforErrorMessage=false

  constructor(private router : Router,
    public hardcodedAuthService : HarcodedAuthenticationService) { }

  ngOnInit(): void {
  }

  loginmethod(){
    //console.log(this.Username)
    //console.log(this.password)
    //if(this.Username === 'default' && this.password==='dummy'){
      if(this.hardcodedAuthService.authenticationService(this.Username,this.password)){
      this.renderforErrorMessage=false
      this.router.navigate(['welcome',this.Username])
    }
    else{
      this.renderforErrorMessage=true
    }

  }
}

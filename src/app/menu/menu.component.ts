import { Component, OnInit } from '@angular/core';
import { HarcodedAuthenticationService } from '../service/harcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  //validUserLoggedIn:boolean=false;

  constructor(public hardcodedService : HarcodedAuthenticationService) { }

  ngOnInit(): void {

    //this.validUserLoggedIn=this.hardcodedService.isUserLoggedIn();
  }

}

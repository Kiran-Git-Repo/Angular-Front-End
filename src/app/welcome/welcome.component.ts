import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from './../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  enteredUsername=''
  messageFromBean=''
  constructor( private route :ActivatedRoute,
                private dataService:WelcomeDataService ) { }

  ngOnInit(): void {

    this.enteredUsername =this.route.snapshot.params['name']

  }
  getWelcomeMessage(){
    this.dataService.getHelloWorldMessage().subscribe(
      response => this.handleSuccessResponse(response),
      error =>this.handleError(error)
    );
  }

  getWelcomeMessageWithParamaeter(){
    this.dataService.getMessageWithPathVariable(this.enteredUsername).subscribe(
      response => this.handleSuccessResponse(response),
      error =>this.handleError(error)
    );
  }


handleSuccessResponse(response){
//console.log(response)
this.messageFromBean=response;
}
handleError(error){
  //console.log(error.message)
  this.messageFromBean=error.message;
}

}

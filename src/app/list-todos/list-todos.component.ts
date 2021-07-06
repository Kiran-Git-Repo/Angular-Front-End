import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from './../service/data/todo-data.service';
import { BasicAuthenticationService } from './../service/Basic-authentication.service';

export class Todo{
  constructor(
      public id:number,
      public description:String,
      public status:boolean,
      public targetDate:Date,
       ){

       }
}


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  
message : string
  todos : Todo[]
  //[
  //   new Todo(1,'Learn Angular',false,new Date()),
  //   new Todo(2,'Learn SpringBoot',false,new Date()),
  //   new Todo(3,'Learn Fullstack',false,new Date())
  //   // {id : 1,Description : 'Learn Angular'},
  //   //       {id : 2,Description : 'Learn SprinBoot'},
  //   //       {id : 3,Description : 'Learn Fullstack'}
  //       ]

  constructor(private todoService: TodoDataService,
              private route:Router,
              private basicService :BasicAuthenticationService) { }

              
  ngOnInit(): void {
    this.refreshTodo();
  }

  refreshTodo(){
    this.todoService.retrieveAllTodos(this.basicService.getAuthenticatedUser()).subscribe(
      response=>  {
        //console.log(response);
        this.todos=response
      }
    )
  }
  deleteTodo(id){
    this.todoService.deleteTodoService(this.basicService.getAuthenticatedUser(),id).subscribe(
      response=>  {
        //console.log(response);
        this.message=`Delete of ${id} is Successfull`
        this.refreshTodo();
      }
    )

  }

  updateTodo(id){

    this.route.navigate(['todos',id])

  }
  addNewTodo(){
    this.route.navigate(['todos',-1])
  }


}

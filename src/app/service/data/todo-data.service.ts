import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Todo} from '../../list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http:HttpClient) { }

  retrieveAllTodos(username){

   return this.http.get<Todo[]>(`https://spring-backend-todo.herokuapp.com/users/${username}/todos`,{responseType: 'json'});
  }

  deleteTodoService(username,id){

    return this.http.delete(`https://spring-backend-todo.herokuapp.com/users/${username}/todo/${id}`,{responseType: 'json'});
   }
   retrieveTodoService(username,id){

    return this.http.get<Todo>(`https://spring-backend-todo.herokuapp.com/users/${username}/todo/${id}`,{responseType: 'json'});
   }

   updateTodo(username,id,todo){
    return this.http.put(`https://spring-backend-todo.herokuapp.com/users/${username}/todo/${id}`,todo,{responseType: 'json'});
   }

   createTodo(username,todo){
    return this.http.post(`https://spring-backend-todo.herokuapp.com/users/${username}/todo`,todo,{responseType: 'json'});
   }
   

}

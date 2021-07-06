import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Todo} from '../../list-todos/list-todos.component';
import {LOCAL_URL,LOCAL_URL_Jpa,HEROKU_URL} from  './../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http:HttpClient) { }

  retrieveAllTodos(username){
    // let basicAuthEncodedHeaderString = this.basicAuthHeaders();
    // let headers = new HttpHeaders(
    //   {
    //     Authorization: basicAuthEncodedHeaderString
    //   }
    // )

    return this.http.get<Todo[]>(`${HEROKU_URL}/users/${username}/todos`)
    //{headers});
   //return this.http.get<Todo[]>(`https://spring-backend-todo.herokuapp.com/users/${username}/todos`);
  }

  deleteTodoService(username,id){
    return this.http.delete(`${HEROKU_URL}/users/${username}/todo/${id}`);
    //return this.http.delete(`https://spring-backend-todo.herokuapp.com/users/${username}/todo/${id}`);
   }
   retrieveTodoService(username,id){

    
    return this.http.get<Todo>(`${HEROKU_URL}/users/${username}/todo/${id}`);

    //return this.http.get<Todo>(`https://spring-backend-todo.herokuapp.com/users/${username}/todo/${id}`);
   }

   updateTodo(username,id,todo){
    return this.http.put(`${HEROKU_URL}/users/${username}/todo/${id}`,todo);
   //return this.http.put(`https://spring-backend-todo.herokuapp.com/users/${username}/todo/${id}`,todo);
   }

   createTodo(username,todo){
    return this.http.post(`${HEROKU_URL}/users/${username}/todo`,todo);
    //return this.http.post(`https://spring-backend-todo.herokuapp.com/users/${username}/todo`,todo);
    
  }
// basicAuthHeaders(){
//   let username='superuser'
//   let password='dummy'
//   let basicAuthEncodedString = 'Basic ' + window.btoa(username + ':' + password);
//   return basicAuthEncodedString;
// }   

}

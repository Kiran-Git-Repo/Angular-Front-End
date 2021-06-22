import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouteguardService } from '.././app/service/routeguard.service';
import { TodoComponent } from './todo/todo.component';


const routes: Routes = [
  {path : '', component:LoginComponent},
  {path : 'login', component:LoginComponent},
  {path : 'welcome/:name', component:WelcomeComponent,canActivate:[RouteguardService]},
  {path : 'todos', component:ListTodosComponent,canActivate:[RouteguardService]},
  {path : 'logout',component:LogoutComponent,canActivate:[RouteguardService]},
  {path : 'todos/:id',component:TodoComponent,canActivate:[RouteguardService]},
  {path : '**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

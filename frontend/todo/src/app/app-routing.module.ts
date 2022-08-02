import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { ErrorComponent } from './error/error.component';
import { ListOfTodosComponent } from './list-of-todos/list-of-todos.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ModifyTodoComponent } from './modify-todo/modify-todo.component';
import { RouteGuardService } from './service/route-guard.service';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'',component: LoginComponent},
  {path:'login',component: LoginComponent},
  {path:'welcome/:name',component: WelcomeComponent, canActivate: [RouteGuardService]},
  {path:'todos',component: ListOfTodosComponent, canActivate: [RouteGuardService]},
  {path:'createtodo',component: CreateTodoComponent, canActivate: [RouteGuardService]},
  {path:'modifytodo',component: ModifyTodoComponent, canActivate: [RouteGuardService]},
  {path:'logout',component: LogoutComponent, canActivate: [RouteGuardService]},
  {path:'**',component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

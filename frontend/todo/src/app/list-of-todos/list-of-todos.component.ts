import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-of-todos',
  templateUrl: './list-of-todos.component.html',
  styleUrls: ['./list-of-todos.component.css']
})

export class ListOfTodosComponent implements OnInit {

  todos = [new Todos(1, 'Learn Angular', new Date(), false),
           new Todos(2, 'Learn Rest API', new Date(), false),
           new Todos(3, 'Learn Springboot', new Date(), false)]
  constructor() { }
  deleteTodos()
  {
    alert("You are about to delete the todo")
  }
  ngOnInit(): void {
  }

 

}
export class Todos {
  constructor(public id : Number, public description: String, public targetDate: Date, public status: Boolean){}
  
}

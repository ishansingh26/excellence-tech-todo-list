import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent{

  newTodo: string;
  todos: any;
  todoObj: any;

  constructor() {
    this.newTodo = '';
    this.todos = [];
  }

  addTodo() {
    if(this.newTodo) {
      this.todos.push(this.newTodo);
      this.newTodo = '';
    }
  }
}

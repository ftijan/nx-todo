import { Component, Input } from '@angular/core';
import { Todo } from '@nx-todo/data';

@Component({
  selector: 'nx-todo-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {  
  @Input() todos: Todo[] = [];
}

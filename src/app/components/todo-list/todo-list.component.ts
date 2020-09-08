import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../service/tasks.service';
import { TaskModel } from '../../models/task-model';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  list: TaskModel[];
  values: string
  boxChacked = true;
  boxChackedLine: string = ''

  constructor(private taskSVC: TasksService) {}

  ngOnInit(): void {
    this.list = this.taskSVC.list
    this.values = this.taskSVC.values
  }

  
  addToList(value: string){
    this.taskSVC.addToList(value)
  }

  removeFromList(index){
    this.taskSVC.removeFromList(index)
  }
  taskComplited(i){
    for (let index = 0; index < this.list.length; index++) {
      if(i == index){
        this.list[index].done= true
      }
      
      
    }

   

    return this.boxChacked
   
    
  }
}


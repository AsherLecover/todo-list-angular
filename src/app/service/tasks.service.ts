import { Injectable } from '@angular/core';
import {TaskModel} from '../models/task-model'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  list: TaskModel[];
  values: string

  constructor() { }

  addToList(value: string){
    this.list.push({task: value,done: true })
  }

  removeFromList(index){
    console.log('index:', index);
    this.list.splice(index, 1);
    console.log("list: ", this.list);
  }
}

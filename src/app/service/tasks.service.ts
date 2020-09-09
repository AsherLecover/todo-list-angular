import { Injectable } from '@angular/core';
import {TaskModel} from '../models/task-model'
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TasksService {
  list: TaskModel[] = [];
  values: string
  boxChacked = true;
  configUrl = 'http://127.0.0.1:8080/todo.json';
  

  constructor(private http: HttpClient) { }

  getConfig() {
    return this.http.get(this.configUrl);
  }


  addToList(value: string){
    this.list.push({task: value,done: true })
  }

  removeFromList(index){
    console.log('index:', index);
    this.list.splice(index, 1);
    console.log("list: ", this.list);
  }

  taskComplited(i){
    for (let index = 0; index < this.list.length; index++) {
      if(i == index){
        this.list[index].done = !this.list[index].done
      }
    }
    return this.boxChacked
  }

 
}

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
  configUrl = `http://127.0.0.1:8080/todo.json`;
  taskToBeChange: string 
    cuurentIndex: number = -1;

  

  constructor(private http: HttpClient) {}

  getConfig() {
    console.log('getConfig');
    
    return this.http.get(this.configUrl);
  }
  


  addToList(value: string){
    this.list.push({task: value,done: true })
    this.http.get(`http://127.0.0.1:8080/todo.json?add=${value}`).subscribe(console.log)

  }

  removeFromList(index){
    this.http.get(`http://127.0.0.1:8080/todo.json?index=${index}`).subscribe(console.log)
    
    this.getConfig()

    console.log('index:', index);
    this.list.splice(index, 1);
    console.log("list: ", this.list);
  }

  taskComplited(i){
    // let mybool = false
    for (let index = 0; index < this.list.length; index++) {
      if(i == index){
        // mybool = !mybool

        this.http.get(`http://127.0.0.1:8080/todo.json?taskComplitedIndex=${i}&taskComplitedBool=${this.list[index].done = !this.list[index].done}`).subscribe(console.log)
        console.log(11111111111111);
        
        this.getConfig()
      }
    }
    return this.boxChacked
  }

  changeTask(index){

    this.http.get(`http://127.0.0.1:8080/todo.json?taskToChangeIndex=${index}&taskToChange=${this.taskToBeChange}`).subscribe(console.log)
        this.getConfig()
    
    
  }

 
}

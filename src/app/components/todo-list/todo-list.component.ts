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
  boxChacked: boolean;
  modal
  message: string = 'aaaaaaaaaaaaaaaa'
  fff = false
  flag = true




  constructor(private taskSVC: TasksService) {}

  ngOnInit(): void {
    this.list = this.taskSVC.list
    this.values = this.taskSVC.values
    this.boxChacked = this.taskSVC.boxChacked
    this.modal = document.getElementById("myModal");

    this.taskSVC.getConfig().subscribe((data: TaskModel[] )=> {
    // this.list = data
     
    })
  }

  
  addToList(value: string){
    console.log(22222222222);
    
    this.taskSVC.addToList(value)
  }

  removeFromList(index){
    this.taskSVC.removeFromList(index)
  }

  taskComplited(index){
    console.log(1111111111);
    
    this.taskSVC.taskComplited(index)
  }

  onClose(){
    this.fff = false
  }

  addItemToBag(){
    this.flag = false;
    this.fff = true

  }



}


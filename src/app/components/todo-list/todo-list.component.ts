import { Component, OnInit, Input } from '@angular/core';
import { TasksService } from '../../service/tasks.service';
import { TaskModel } from '../../models/task-model';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  list: TaskModel[];
  values: string;
  boxChacked: boolean;
  modal;
  closePopup = false;
  flag = true;
  curentTaskToBeChange: string = '';
  cuurentIndex: number = -1;

  constructor(private taskSVC: TasksService) {}

  ngOnInit(): void {
    this.list = this.taskSVC.list;
    this.values = this.taskSVC.values;
    this.boxChacked = this.taskSVC.boxChacked;
    this.modal = document.getElementById('myModal');

    this.taskSVC.getConfig().subscribe((data: TaskModel[]) => {
      this.taskSVC.list = data;
      this.list = data;
    });
  }

  addToList(value: string) {
    this.taskSVC.addToList(value);
  }

  removeFromList(index) {
    this.taskSVC.removeFromList(index);
  }

  taskComplited(index) {
    this.taskSVC.taskComplited(index);
  }

  changeTask(index) {
    this.cuurentIndex = index;
    this.taskSVC.changeTask(index);
    this.curentTaskToBeChange = this.list[index].task;
    console.log('list:', this.list);
  }

  onClose(inpToChange) {
    this.taskSVC.taskToBeChange = inpToChange
    this.closePopup = false;
    this.list[this.cuurentIndex].task = inpToChange;
    this.list[this.cuurentIndex].done = true;
  }

  editTask(index) {
    console.log('additemtobag');
    this.flag = false;
    this.closePopup = true;
    this.changeTask(index);
  }
}

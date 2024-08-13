import { Component } from '@angular/core';
import {tasks} from '../../../data/tasks';

@Component({
  selector: 'app-planned',
  templateUrl: './planned.component.html',
  styleUrl: './planned.component.scss'
})
export class PlannedComponent {
  taskslist = tasks;
  adding = false;
  inputValue:string;

  addTask(tasktitle: string = this.inputValue): void{
    if(this.inputValue){
      tasks.push(
        {
          title: tasktitle,
          status: 1
        }
      )
    }
    
    this.adding = !this.adding;

    this.inputValue = "";
  }

  noAddTask(): void{
    this.inputValue = "";
    this.adding = !this.adding;
  }
}

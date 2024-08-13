import { Input, Component } from '@angular/core';
import {ITask} from '../../../models/task'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})


export class TaskComponent {
  @Input() task: ITask;
  @Input() first: boolean;
  @Input() last: boolean;

  nextStage(): void {
    if(this.task.status!=3){
      this.task.status += 1;
    }
  }
  prevStage(): void {
    if(this.task.status!=1){
      this.task.status -= 1;
    }
  }
}

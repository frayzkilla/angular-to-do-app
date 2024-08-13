import { Component } from '@angular/core';
import {tasks} from '../../../data/tasks';

@Component({
  selector: 'app-inprogress',
  templateUrl: './inprogress.component.html',
  styleUrl: './inprogress.component.scss'
})
export class InprogressComponent {
  taskslist = tasks;
}

import { Component } from '@angular/core';
import {tasks} from '../../../data/tasks';

@Component({
  selector: 'app-finished',
  templateUrl: './finished.component.html',
  styleUrl: './finished.component.scss'
})
export class FinishedComponent {
  taskslist = tasks;
}

import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/Task'
import { TasksService } from 'src/app/services/tasks.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];
  toggleIndex: number = 0;
  idxMapper = {
    0: 'günlük',
    1: 'haftalık',
    2: 'aylık',
    3: 'tamamlanan'
  }

  constructor(private taskService: TasksService) { }

  ngOnInit() {
    this.tasks = this.taskService.filterTasks(this.idxMapper[this.toggleIndex])
  }

  onToggleChange(){
    this.tasks = this.taskService.filterTasks(this.idxMapper[this.toggleIndex])
  }

  deleteTask() {
    this.tasks = this.taskService.filterTasks(this.idxMapper[this.toggleIndex]);
  }

  switchComplete() {
    this.tasks = this.taskService.filterTasks(this.idxMapper[this.toggleIndex]);
  }
}

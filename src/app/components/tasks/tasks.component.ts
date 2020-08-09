import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/Task'
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskService: TasksService) { }

  ngOnInit() {
    this.tasks = this.taskService.getTasks()
  }

  deleteTask(tasks: Task[]){
    this.tasks = tasks;
  }

  switchComplete(tasks: Task[]){
    this.tasks = tasks
  }
}

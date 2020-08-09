import { Component, OnInit } from '@angular/core';
import {Task} from '../../models/Task'
import { TasksService } from 'src/app/services/tasks.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  task: string;
  importance: string = "primary";
  date;

  constructor(
    private taskSerice: TasksService, 
    private router: Router,
    private snackbar: MatSnackBar
    ) { }

  ngOnInit() {
  }

  createTask() {
    if(!(this.task && this.date)){
      this.snackbar.open('Lütfen tüm alanları dolurunuz!', 'Tamam', {duration: 3000})
      return;
    }
    
    let newTask: Task = {
      id: Math.random() * 1000 + 1,
      task: this.task,
      done: false,
      category: 'günlük',
      deadline: this.date,
      importance: this.importance
    }

    this.taskSerice.addTask(newTask)
    this.snackbar.open(`${this.task} görevi oluşturuldu!`, 'Tamam', {duration: 3000})
    this.router.navigate(['/'])
  }
}

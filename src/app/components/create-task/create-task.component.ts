import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/Task'
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
  date: any;
  minDate = new Date()
  hour: any;
  minute: any;

  constructor(
    private taskSerice: TasksService,
    private router: Router,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  createTask() {
    if (!(this.task && this.date && this.hour && this.minute)) {
      this.snackbar.open('Lütfen tüm alanları dolurunuz!', 'Tamam', { duration: 3000 })
      return;
    }

    if ((!parseInt(this.hour) || !parseInt(this.minute)) || (parseInt(this.hour) < 0 || parseInt(this.hour) > 23) || (parseInt(this.minute) < 0 || parseInt(this.minute) > 59)) {
      this.snackbar.open('Lütfen geçerli bir saat ve dakika giriniz!', 'Tamam', { duration: 3000 })
      return;
    }

    const newTask: Task = {
      id: Math.floor(Math.random() * Math.floor(2000) + 1),
      task: this.task,
      done: false,
      deadline: new Date(this.date.setHours(parseInt(this.hour), parseInt(this.minute))),
      importance: this.importance
    }

    this.taskSerice.addTask(newTask)
    this.snackbar.open(`${this.task} görevi oluşturuldu!`, 'Tamam', { duration: 3000 })
    this.router.navigate(['/'])
  }
}

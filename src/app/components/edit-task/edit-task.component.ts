import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Task } from 'src/app/models/Task';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  task: Task;
  taskText: string;
  importance: string = "";
  date: any;
  minDate = new Date()
  hour: any;
  minute: any;

  constructor(
    private taskService: TasksService,
    private route: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar
    ) { }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    const task: Task = this.taskService.getTask(id);
    this.task = task;
    this.taskText = task.task;
    this.importance = task.importance;
    this.date = task.deadline;
    this.hour = task.deadline.getHours();
    this.minute = task.deadline.getMinutes();
  }

  editTask() {
    if (!(this.taskText && this.date && this.hour !== '' && this.minute !== '')) {
      this.snackbar.open('Lütfen tüm alanları dolurunuz!', 'Tamam', { duration: 3000 })
      return;
    }

    if ((isNaN(parseInt(this.hour)) || isNaN(parseInt(this.minute))) || (parseInt(this.hour) < 0 || parseInt(this.hour) > 23) || (parseInt(this.minute) < 0 || parseInt(this.minute) > 59)) {
      this.snackbar.open('Lütfen geçerli bir saat ve dakika giriniz!', 'Tamam', { duration: 3000 })
      return;
    }

    const taskToEdit: Task = {
      id: this.task.id,
      task: this.taskText,
      done: false,
      deadline: new Date(this.date.setHours(parseInt(this.hour), parseInt(this.minute))),
      importance: this.importance
    }

    this.taskService.editTask(taskToEdit)
    this.snackbar.open(`${this.task.task} görevi ${this.taskText} olarak düzenlendi!`, 'Tamam', { duration: 3000 })
    this.router.navigate(['/'])
  }

}

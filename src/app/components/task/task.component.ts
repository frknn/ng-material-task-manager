import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/models/Task';
import { TasksService } from 'src/app/services/tasks.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task: Task;
  @Output() deleteTask = new EventEmitter<any>()
  @Output() switchComplete = new EventEmitter<any>()

  constructor(
    private taskService: TasksService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  calculateRemaining(date): string {
    const seconds = date.getTime() - new Date().getTime()
    const days = seconds / 1000 / 60 / 60 / 24;
    if(seconds < 0) {
      if(Math.abs(Math.floor(days))>1){
        return `${Math.abs(Math.ceil(days))} gün geçti!`
      } else {
        return `${Math.abs(Math.ceil(seconds / 1000 / 60 / 60))} saat geçti!`
      }
    }
    if(days > 1) {
      return `${Math.floor(days)} gün kaldı.`;
    } else {
      const hours = seconds / 1000 / 60 / 60
      return `${Math.ceil(hours)} saat kaldı.`;
    }
  }

  handleDelete(task: Task) {
    this.taskService.deleteTask(task)
    this.deleteTask.emit()
    this.snackBar.open(`${task.task} görevi silindi!`, 'Tamam', { duration: 3000 })
  }

  handleComplete(task: Task) {
    let message: string = task.done ?
      `${task.task} görevi geri alındı!` :
      `${task.task} görevi tamamlandı!`
    this.taskService.switchTaskDone(task)
    this.switchComplete.emit()
    this.snackBar.open(message, 'Tamam', { duration: 3000 })
  }

}

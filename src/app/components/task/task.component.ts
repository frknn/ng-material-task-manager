import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/models/Task';
import { TasksService } from 'src/app/services/tasks.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

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
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit() {
  }

  navigateEdit(id) {
    this.router.navigate(['/duzenle', id])
  }

  generateRemainingString(date): string{
    return this.taskService.calculateRemaining(date)
  }

  handleDelete(task: Task): void {
    this.taskService.deleteTask(task)
    this.deleteTask.emit()
    this.snackBar.open(`${task.task} görevi silindi!`, 'Tamam', { duration: 3000 })
  }

  handleComplete(task: Task): void {
    let message: string = task.done ?
      `${task.task} görevi geri alındı!` :
      `${task.task} görevi tamamlandı!`
    this.taskService.switchTaskDone(task)
    this.switchComplete.emit()
    this.snackBar.open(message, 'Tamam', { duration: 3000 })
  }

}

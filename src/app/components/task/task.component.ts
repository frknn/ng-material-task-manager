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
  @Output() deleteTask = new EventEmitter<Task[]>()
  @Output() switchComplete = new EventEmitter<Task[]>()

  constructor(
    private taskService: TasksService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  handleDelete(task: Task) {
    let tasks: Task[] = this.taskService.deleteTask(task)
    this.deleteTask.emit(tasks)
    this.snackBar.open(`${task.task} görevi silindi!`, 'Tamam', { duration: 3000 })
  }

  handleComplete(task: Task) {
    let message: string = task.done ?
      `${task.task} görevi geri alındı!` :
      `${task.task} görevi tamamlandı!`
    let tasks: Task[] = this.taskService.switchTaskDone(task)
    this.switchComplete.emit(tasks)
    this.snackBar.open(message, 'Tamam', { duration: 3000 })
  }

}

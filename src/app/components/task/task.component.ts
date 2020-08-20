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

  /* Gösterilecek task input olara üst componetten alınır.
    Silme ve Tamamlama işlemleri için üst componente event emitterlar
    yardımıyla haber verilir.
   */
  @Input() task: Task;
  @Output() deleteTask = new EventEmitter<any>()
  @Output() switchComplete = new EventEmitter<any>()

  constructor(
    private taskService: TasksService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  // Görev düzenleme sayfasına yönlendirme fonksiyonu
  // Görevin bulunabilmesi için id'yi route parametresi olarak ekler.
  navigateEdit(id) {
    this.router.navigate(['/duzenle', id])
  }

  /* Servisten görevin tammalanmasına ne kadar süre kaldığını
    isteyen fonksiyon.  
  */
  generateRemainingString(date): string {
    return this.taskService.calculateRemaining(date)
  }

  /* Servis yardımıyla istenen görevi siler ve üst componente
  bir event yollar.
  */
  handleDelete(task: Task): void {
    this.taskService.deleteTask(task)
    this.deleteTask.emit()
    this.snackBar.open(`${task.task} görevi silindi!`, 'Tamam', { duration: 3000 })
  }

  /* Görevin tamamlanması ya da tamamlanan görevin
    geri alınmasına göre bir mesaj oluşturur.
    Servis yardımıyla görevin "done" propertysini toggle eder. 
  */
  handleComplete(task: Task): void {
    let message: string = task.done ?
      `${task.task} görevi geri alındı!` :
      `${task.task} görevi tamamlandı!`;

    this.taskService.switchTaskDone(task)
    this.switchComplete.emit()
    this.snackBar.open(message, 'Tamam', { duration: 3000 })
  }

}

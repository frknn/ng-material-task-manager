import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../models/Task'
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.css']
})
export class QuickViewComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskService: TasksService, private datePipe: DatePipe) { }

  ngOnInit() {
    this.tasks = this.taskService.getTasks().filter(t => !t.done)
  }

  // Tooltipte gösterilecek bilgilendirme stringini oluşturur
  createTooltip(task): string {
    return 'Son tarih: ' + this.datePipe.transform(task.deadline, 'dd/MM/yyyy HH:mm') + '\n' + 'Süre: ' + this.calculateRemainingTime(task.deadline) + '\n' + 'Öncelik: ' + (task.importance === 'primary' ? 'Düşük' : task.importance === 'accent' ? 'Orta' : 'Yüksek');
  }

  // Görevlerin arka plan rengini kalan süreye göre belirler
  // tarihi geçenler için light
  // günlük için warn, haftalık için accent, aylık için primary döndürür
  calculateRemaining(task): string {
    const miliseconds = task.deadline.getTime() - new Date().getTime()
    const days = miliseconds / 1000 / 60 / 60 / 24;
    return days < 0 ? 'light' : days >= 0 && days < 1 ? 'warn' : days >= 1 && days < 7 ? 'accent' : 'primary'
  }

  // tasks componentindeki kalan süre hesaplama fonksiyonu
  // refactor edilirken servise taşınacak
  calculateRemainingTime(date): string {
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

}

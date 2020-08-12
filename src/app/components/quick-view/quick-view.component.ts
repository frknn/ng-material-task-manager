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

  // kalan süreyi string şeklinde service'ten alan fonksiyon
  generateRemainingString(date): string {
    return this.taskService.calculateRemaining(date);
  }

  // Tooltipte gösterilecek bilgilendirme stringini oluşturur
  createTooltip(task): string {
    return 'Son tarih: '
      + this.datePipe.transform(task.deadline, 'dd/MM/yyyy HH:mm')
      + '\n' + 'Süre: '
      + this.generateRemainingString(task.deadline)
      + '\n' + 'Öncelik: '
      + (task.importance === 'primary' ? 'Düşük' : task.importance === 'accent' ? 'Orta' : 'Yüksek');
  }

  // Görevlerin arka plan rengini kalan süreye göre belirler
  // tarihi geçenler için light
  // günlük için warn, haftalık için accent, aylık için primary döndürür
  generateRemainingColor(task): string {
    const miliseconds = task.deadline.getTime() - new Date().getTime()
    const days = miliseconds / 1000 / 60 / 60 / 24;
    return days < 0 ? 'light' 
    : days >= 0 && days < 1 ? 'warn' 
    : days >= 1 && days < 7 ? 'accent' 
    : 'primary'
  }

}

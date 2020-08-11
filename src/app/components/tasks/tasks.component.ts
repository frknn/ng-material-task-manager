import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/Task'
import { TasksService } from 'src/app/services/tasks.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];
  searchText: string = '';
  // Seçili kategori sekmesi
  toggleIndex: number = 0;
  // Seçili sekmenin karşılık geldiği kategori için map objesi
  toggleIndexMapper = {
    0: 'günlük',
    1: 'haftalık',
    2: 'aylık',
    3: 'tamamlanan'
  }

  constructor(private taskService: TasksService, private snackbar: MatSnackBar) { }

  // başlangıçta günlük görevleri döndürür
  ngOnInit() {
    this.tasks = this.taskService.filterTasks(this.toggleIndexMapper[this.toggleIndex])
  }

  // Bulunulan kategorideki görevler isme göre arar
  searchTask(){
    const foundTasks = this.taskService.filterTasks(this.toggleIndexMapper[this.toggleIndex]).filter(t => t.task.toLowerCase().includes(this.searchText.toLowerCase()))
    if(foundTasks.length){
      this.tasks = foundTasks
      this.snackbar.open(`${this.tasks.length} görev bulundu!`, 'Tamam', {duration: 3000})
    } else {
      this.snackbar.open('Görev bulunamadı!', 'Tamam', {duration: 3000})
    }
    this.searchText = ''
  }

  // Günlük - Haftalık - Aylık sekmeleri değiştikte
  // o kategorideki görevleri getirir
  onToggleChange(){
    this.tasks = this.taskService.filterTasks(this.toggleIndexMapper[this.toggleIndex])
  }

  // Görev silindikten sonra kalan görevleri getirir
  deleteTask() {
    this.tasks = this.taskService.filterTasks(this.toggleIndexMapper[this.toggleIndex]);
  }

  // Tamamla - Geri al toggle'ı çalıştıktan sonra değişen görevleri getir
  switchComplete() {
    this.tasks = this.taskService.filterTasks(this.toggleIndexMapper[this.toggleIndex]);
  }
}

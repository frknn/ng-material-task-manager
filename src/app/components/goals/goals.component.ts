import { Component, OnInit } from '@angular/core';
import { GoalsService } from 'src/app/services/goals.service';
import { MatDialog } from '@angular/material';
import { DoneTasksDialogComponent } from '../done-tasks-dialog/done-tasks-dialog.component'

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {

  // Günlük ve aylık hedefleri gösterebilmek için gerekli değişkenler
  tasksDoneToday = []
  tasksDoneThisMonth = []
  dailyGoals: number;
  monthlyGoals: number;
  dailyValue: number;
  monthlyValue: number;

  constructor(
    private goalService: GoalsService,
    private dialog: MatDialog
  ) { }

  /* Günlük ve aylık tamamlanan görevleri,
    tamamlanması gereken görev sayısını
    ve template'te gösterilecek yüzdelik değer
    component yaratılırken servisten çekilir.
  */
  ngOnInit() {
    this.tasksDoneToday = this.goalService.getTasksDoneToday()
    this.dailyGoals = this.goalService.getDailyGoals()
    this.dailyValue = this.tasksDoneToday.length * (100 / this.dailyGoals);

    this.tasksDoneThisMonth = this.goalService.getTasksDoneThisMonth()
    this.monthlyGoals = this.goalService.getMonthlyGoals()
    this.monthlyValue = this.tasksDoneThisMonth.length * (100 / this.monthlyGoals);

  }

  /* Günlük hedefi belirlemek için konan slider
    kaydırıldıkça servisi kullanarak hedef kaydedilir
    ve günlük hedefi gösteren yüzdelik değer tekrar hesaplanır.
  */
  onDailySliderChange() {
    this.goalService.setDailyGoals(this.dailyGoals)
    this.dailyValue = this.tasksDoneToday.length * (100 / this.dailyGoals)
  }

  /* Aylık hedefi belirlemek için konan slider
     kaydırıldıkça servisi kullanarak hedef kaydedilir
     ve aylık hedefi gösteren yüzdelik değer tekrar hesaplanır.
   */
  onMonthlySliderChange() {
    this.goalService.setMonthlyGoals(this.monthlyGoals)
    this.monthlyValue = this.tasksDoneThisMonth.length * (100 / this.monthlyGoals)
  }

  /* Günlük tamamlanan hedefleri göstermesi için pop-up componente
    data değişkeni aracılığıyla gerekli veri gönderilir.
  */
  openDailyDialog() {
    this.dialog.open(DoneTasksDialogComponent, { data: { tasksDone: this.tasksDoneToday } })
  }

  /* Aylık tamamlanan hedefleri göstermesi için pop-up componente
    data değişkeni aracılığıyla gerekli veri gönderilir.
  */
  openMonthlyDialog() {
    this.dialog.open(DoneTasksDialogComponent, { data: { tasksDone: this.tasksDoneThisMonth } })
  }

}

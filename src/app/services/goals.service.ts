import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {

  /* Görevleri, hedefleri ve tamamlanma zamanlarını
    tutmak için kullanılan değişkenler 
  */
  private today = new Date();
  private thisMonth = this.today.getMonth();
  private thisYear = this.today.getFullYear();
  private startOfToday: number = this.today.setHours(0, 0, 0, 0)
  private startOfMonth = new Date(this.thisYear, this.thisMonth, 1)
  private dailyGoals: number = 3;
  private monthlyGoals: number = 15;
  private tasksDone = [];

  constructor() { }

  // Bugün yapılması hedeflenen görev sayısını döndürür.
  getDailyGoals(): number {
    return this.dailyGoals;
  }

  // Bugün yapılması hedeflenen görev sayısını belirlemek için kullanılır.
  setDailyGoals(dailyGoals) {
    this.dailyGoals = dailyGoals
  }

  // Bu ay yapılması hedeflenen görev sayısını döndürür.
  getMonthlyGoals(): number {
    return this.monthlyGoals;
  }

  // Bu ay yapılması hedeflenen görev sayısını belirlemek için kullanılır.
  setMonthlyGoals(monthlyGoals) {
    this.monthlyGoals = monthlyGoals
  }

  // Bugün tamamlanan görevleri döndürür.
  getTasksDoneToday() {
    return this.tasksDone.filter(t =>
      t.date.getTime() > this.startOfToday
    )
  }

  // Bu ay tamamlanan görevleri döndürür.
  getTasksDoneThisMonth() {
    return this.tasksDone.filter(t =>
      t.date > this.startOfMonth
    )
  }

  // Tamamlanan görevleri servisteki arraye eklene fonksiyon
  addTaskDone(task) {
    const doneObj = {
      task: task,
      date: new Date()
    }
    this.tasksDone.push(doneObj)
  }

  // Geri alınan görevleri servisteki arrayden çıkaran fonksiyon
  removeTaskDone(task) {
    this.tasksDone = this.tasksDone.filter(t => t.task.id !== task.id
    )
  }
}

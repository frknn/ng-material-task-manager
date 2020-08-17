import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {

  private today = new Date();
  private thisMonth = this.today.getMonth();
  private thisYear = this.today.getFullYear();
  private startOfToday: number = this.today.setHours(0, 0, 0, 0)
  private startOfMonth = new Date(this.thisYear, this.thisMonth, 1)
  private dailyGoals: number = 3;
  private monthlyGoals: number = 15;
  private tasksDone = [];

  constructor() { }

  getDailyGoals(): number {
    return this.dailyGoals;
  }

  setDailyGoals(dailyGoals) {
    this.dailyGoals = dailyGoals
  }

  getMonthlyGoals(): number {
    return this.monthlyGoals;
  }

  setMonthlyGoals(monthlyGoals) {
    this.monthlyGoals = monthlyGoals
  }
  getTasksDoneToday() {
    return this.tasksDone.filter(t =>
      t.date.getTime() > this.startOfToday
    )
  }

  getTasksDoneThisMonth() {
    return this.tasksDone.filter(t =>
      t.date > this.startOfMonth
    )
  }

  addTaskDone(task) {
    const doneObj = {
      task: task,
      date: new Date()
    }
    this.tasksDone.push(doneObj)
  }

  removeTaskDone(task) {
    this.tasksDone = this.tasksDone.filter(t => t.task.id !== task.id
    )
  }
}

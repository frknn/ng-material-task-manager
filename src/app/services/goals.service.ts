import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {

  private startOfToday: number = new Date().setHours(0, 0, 0, 0)
  private dailyGoals: number = 5;
  private tasksDone = [];

  constructor() { }

  getDailyGoals(): number {
    return this.dailyGoals;
  }

  setDailyGoals(dailyGoals) {
    this.dailyGoals = dailyGoals
  }

  getTasksDone() {
    return this.tasksDone.filter(t =>
      t.date.getTime() > this.startOfToday
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

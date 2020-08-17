import { Component, OnInit } from '@angular/core';
import { GoalsService } from 'src/app/services/goals.service';
import { MatDialog } from '@angular/material';
import {DoneTasksDialogComponent} from '../done-tasks-dialog/done-tasks-dialog.component'

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {

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

  ngOnInit() {
    this.tasksDoneToday = this.goalService.getTasksDoneToday()
    this.dailyGoals = this.goalService.getDailyGoals()
    this.dailyValue = this.tasksDoneToday.length * (100 / this.dailyGoals);

    this.tasksDoneThisMonth = this.goalService.getTasksDoneThisMonth()
    this.monthlyGoals = this.goalService.getMonthlyGoals()
    this.monthlyValue = this.tasksDoneThisMonth.length * (100 / this.monthlyGoals);

  }

  onDailySliderChange() {
    this.goalService.setDailyGoals(this.dailyGoals)
    this.dailyValue = this.tasksDoneToday.length * (100 / this.dailyGoals)
  }

  onMonthlySliderChange() {
    this.goalService.setMonthlyGoals(this.monthlyGoals)
    this.monthlyValue = this.tasksDoneThisMonth.length * (100 / this.monthlyGoals)
  }

  openDailyDialog(){
    this.dialog.open(DoneTasksDialogComponent, {data:{tasksDone: this.tasksDoneToday}})
  }

  openMonthlyDialog(){
    this.dialog.open(DoneTasksDialogComponent, {data: {tasksDone: this.tasksDoneThisMonth}})
  }

}

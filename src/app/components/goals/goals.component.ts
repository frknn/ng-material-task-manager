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
  dailyGoals: number;
  value: number;

  constructor(
    private goalService: GoalsService,
    private dialog: MatDialog
    ) { }

  ngOnInit() {
    this.tasksDoneToday = this.goalService.getTasksDone()
    this.dailyGoals = this.goalService.getDailyGoals()
    this.value = this.tasksDoneToday.length * (100 / this.dailyGoals);
  }

  onSliderChange() {
    this.goalService.setDailyGoals(this.dailyGoals)
    this.value = this.tasksDoneToday.length * (100 / this.dailyGoals)
  }

  openDialog(){
    this.dialog.open(DoneTasksDialogComponent, {data:{tasksDone: this.tasksDoneToday}})
  }

}

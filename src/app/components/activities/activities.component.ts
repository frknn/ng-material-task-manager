import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/services/activity.service';
import { Activity } from 'src/app/models/Activity';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  activitiesOfToday: Activity[] = [];
  activitiesOfThisWeek: Activity[] = [];
  activitiesOfThisMonth: Activity[] = [];

  constructor(private activityService: ActivityService) { }

  ngOnInit() {
    this.activitiesOfToday = this.activityService.getActivitiesOfToday()
    this.activitiesOfThisWeek = this.activityService.getActivitiesOfLastWeek()
    this.activitiesOfThisMonth = this.activityService.getActivitiesOfLastMonth()
  }

}

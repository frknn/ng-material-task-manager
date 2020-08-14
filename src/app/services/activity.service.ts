import { Injectable } from '@angular/core';
import { Activity } from '../models/Activity';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  startOfToday: number = new Date().setHours(0, 0, 0, 0)
  oneDay: number = 1000 * 60 * 60 * 24;
  oneWeekBefore: number = this.startOfToday - 7 * this.oneDay;
  oneMonthBefore: number = this.startOfToday - 31 * this.oneDay;

  activities: Activity[] = [
    { id: 1, activityText: 'Örnek 1', date: new Date(new Date(2020, 7, 14).setHours(14, 0)) },
    { id: 1, activityText: 'Örnek 2', date: new Date(new Date(2020, 7, 12).setHours(20, 0)) },
    { id: 2, activityText: 'Örnek 3', date: new Date(new Date(2020, 7, 8).setHours(14, 0)) },
    { id: 3, activityText: 'Örnek 4', date: new Date(new Date(2020, 7, 1).setHours(14, 0)) }
  ];

  constructor() { }

  getActivities(): Activity[] {
    return this.activities;
  }

  getActivitiesOfToday(): Activity[] {
    return this.activities.filter(a =>
      a.date.getTime() > this.startOfToday
    )
  }

  getActivitiesOfLastWeek(): Activity[] {
    return this.activities.filter(a =>
      a.date.getTime() < this.startOfToday
      &&
      a.date.getTime() > this.oneWeekBefore
    )
  }

  getActivitiesOfLastMonth(): Activity[] {
    return this.activities.filter(a =>
      a.date.getTime() < this.oneWeekBefore
      &&
      a.date.getTime() > this.oneMonthBefore
    )
  }

  createActivity(message: string): void {
    const newActivity: Activity = {
      id: Math.floor(Math.random() * 2000),
      activityText: message,
      date: new Date()
    }
    this.activities.unshift(newActivity);
  }

  clearActivities(): void {
    this.activities = []
  }
}

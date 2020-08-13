import { Injectable } from '@angular/core';
import { Activity } from '../models/Activity';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  activities: Activity[] = [];

  constructor() { }

  getActivities(): Activity[]{
    return this.activities;
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

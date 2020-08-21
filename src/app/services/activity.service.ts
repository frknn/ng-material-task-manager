import { Injectable } from '@angular/core';
import { Activity } from '../models/Activity';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  // Aktivitelerin yapılma sürelerini hesaplayabilmek için gerekli değişkenler
  startOfToday: number = new Date().setHours(0, 0, 0, 0)
  oneDay: number = 1000 * 60 * 60 * 24;
  oneWeekBefore: number = this.startOfToday - 7 * this.oneDay;
  oneMonthBefore: number = this.startOfToday - 31 * this.oneDay;

  // Örnek aktiviteler
  activities: Activity[] = [
    { id: 1, activityText: 'Örnek 1', date: new Date(new Date(2020, 7, 21).setHours(14, 0)) },
    { id: 1, activityText: 'Örnek 2', date: new Date(new Date(2020, 7, 18).setHours(20, 0)) },
    { id: 2, activityText: 'Örnek 3', date: new Date(new Date(2020, 7, 12).setHours(14, 0)) },
    { id: 3, activityText: 'Örnek 4', date: new Date(new Date(2020, 7, 5).setHours(14, 0)) }
  ];

  constructor() { }

  // Tüm aktiviteleri döndürür
  getActivities(): Activity[] {
    return this.activities;
  }

  // Bugün gerçekleştirilen aktiviteleri döndürür.
  getActivitiesOfToday(): Activity[] {
    return this.activities.filter(a =>
      a.date.getTime() > this.startOfToday
    )
  }

  // Son 7 gün içinde gerçekleştirilen aktiviteleri döndürür.
  getActivitiesOfLastWeek(): Activity[] {
    return this.activities.filter(a =>
      a.date.getTime() < this.startOfToday
      &&
      a.date.getTime() > this.oneWeekBefore
    )
  }

  // Son 31 gün içinde gerçekleştirilen aktiviteleri döndürür.
  getActivitiesOfLastMonth(): Activity[] {
    return this.activities.filter(a =>
      a.date.getTime() < this.oneWeekBefore
      &&
      a.date.getTime() > this.oneMonthBefore
    )
  }

  // Aktivite oluşturmak için kullanılan fonksiyon
  createActivity(message: string): void {
    const newActivity: Activity = {
      id: Math.floor(Math.random() * 2000),
      activityText: message,
      date: new Date()
    }
    this.activities.unshift(newActivity);
  }

  // Aktiviteleri temizler.
  clearActivities(): void {
    this.activities = []
  }
}

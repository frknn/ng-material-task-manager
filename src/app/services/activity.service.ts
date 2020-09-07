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
  activities: Activity[] = [];

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

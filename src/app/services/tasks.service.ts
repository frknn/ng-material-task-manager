import { Injectable } from '@angular/core';
import { Task } from '../models/Task'

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  // Default olarak oluşturulan görevler arrayi.
  tasks: Task[] = [
    {
      id: 1,
      task: 'Çöpü at',
      done: false,
      deadline: new Date(2020, 7, 9),
      importance: 'primary'
    },
    {
      id: 2,
      task: 'Market alışverişini yap',
      done: false,
      deadline: new Date(2020, 7, 9),
      importance: 'accent'
    },
    {
      id: 3,
      task: 'Dolabı düzenle',
      done: false,
      deadline: new Date(2020, 7, 9),
      importance: 'warn'
    },
    {
      id: 4,
      task: 'Evi temizle',
      done: false,
      deadline: new Date(2020, 7, 16),
      importance: 'primary'
    },
    {
      id: 5,
      task: 'Kitabı geri ver',
      done: false,
      deadline: new Date(2020, 7, 16),
      importance: 'accent'
    },
    {
      id: 6,
      task: 'ŞL Çeyrek Finalini izle',
      done: false,
      deadline: new Date(2020, 7, 16),
      importance: 'warn'
    },
    {
      id: 7,
      task: 'Kirayı yatır',
      done: false,
      deadline: new Date(2020, 8, 9),
      importance: 'primary'
    },
    {
      id: 8,
      task: 'Faturaları öde',
      done: false,
      deadline: new Date(2020, 8, 9),
      importance: 'accent'
    },
    {
      id: 9,
      task: 'ŞL Finalini izle',
      done: false,
      deadline: new Date(2020, 8, 9),
      importance: 'warn'
    }
  ]

  // Tüm taskleri döndürür.
  getTasks(): Task[] {
    return this.tasks
  }

  // Taskleri kalan sürelerine veya tamamlanma durumlarına göre
  // filtreleyerek döndürür
  filterTasks(filter: string): Task[] {
    const nowMiliseconds: number = new Date().getTime()
    // Görev süresi 1 günden azsa ve tamamlanmamışsa
    if (filter === 'günlük') {
      return this.tasks.filter(t => {
        const miliseconds: number = t.deadline.getTime() - nowMiliseconds
        const days: number = miliseconds / 1000 / 60 / 60 / 24;
        return days < 1 && !t.done
      })
    }
    // Görev süresi 1 haftadan azsa ve tamamlanmamışsa
    else if (filter === 'haftalık') {
      return this.tasks.filter(t => {
        const miliseconds: number = t.deadline.getTime() - nowMiliseconds
        const days: number = miliseconds / 1000 / 60 / 60 / 24;
        return days > 1 && days < 7 && !t.done
      })
    } 
    // Görev süresi 1 aydan azsa ve tamamlanmamışsa
    else if (filter === 'aylık') {
      return this.tasks.filter(t => {
        const miliseconds: number = t.deadline.getTime() - nowMiliseconds
        const days: number = miliseconds / 1000 / 60 / 60 / 24;
        return days > 7 && days < 31 && !t.done
      })
    } 
    // Görev tamamlanmışsa
    else if (filter === 'tamamlanan'){
      return this.tasks.filter(t => t.done)
    }
  }

  /* Task arrayindeki değiştirilmek istenen taskin indexini bulur,
    aynı taskleri içeren yeni bir array oluşturur,
    bulunan indexteki task objesinin done kısmını günceller
    güncellenmiş task arrayi olarak döndürür.
   */
  switchTaskDone(task: Task): Task[] {
    const elementsIndex: number = this.tasks.findIndex(t => t.id === task.id)
    let newTasks: Task[] = [...this.tasks]
    newTasks[elementsIndex] = { ...newTasks[elementsIndex], done: !newTasks[elementsIndex].done }
    this.tasks = newTasks
    return this.tasks
  }

  // Argüman olarak verilen görevi silip yeni arrayi döndürür.
  deleteTask(task: Task): Task[] {
    this.tasks = this.tasks.filter(t => t.id !== task.id)
    return this.tasks
  }

  // Argüman olarak verilen görevi ekleyip yeni arrayi döndürür.
  addTask(task: Task): Task[] {
    this.tasks = this.tasks.concat(task)
    return this.tasks
  }

  constructor() { }
}

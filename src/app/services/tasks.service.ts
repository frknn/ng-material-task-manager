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
      category: 'günlük',
      importance: 'primary'
    },
    {
      id: 2,
      task: 'Market alışverişini yap',
      done: false,
      deadline: new Date(2020, 7, 9),
      category: 'günlük',
      importance: 'accent'
    },
    {
      id: 3,
      task: 'Dolabı düzenle',
      done: false,
      deadline: new Date(2020, 7, 9),
      category: 'günlük',
      importance: 'warn'
    },
    {
      id: 4,
      task: 'Evi temizle',
      done: false,
      deadline: new Date(2020, 7, 16),
      category: 'haftalık',
      importance: 'primary'
    },
    {
      id: 5,
      task: 'Kitabı geri ver',
      done: false,
      deadline: new Date(2020, 7, 16),
      category: 'haftalık',
      importance: 'accent'
    },
    {
      id: 6,
      task: 'ŞL Çeyrek Finalini izle',
      done: false,
      deadline: new Date(2020, 7, 16),
      category: 'haftalık',
      importance: 'warn'
    },
    {
      id: 7,
      task: 'Kirayı yatır',
      done: false,
      deadline: new Date(2020, 8, 9),
      category: 'aylık',
      importance: 'primary'
    },
    {
      id: 8,
      task: 'Faturaları öde',
      done: false,
      deadline: new Date(2020, 8, 9),
      category: 'aylık',
      importance: 'accent'
    },
    {
      id: 9,
      task: 'ŞL Finalini izle',
      done: false,
      deadline: new Date(2020, 8, 9),
      category: 'aylık',
      importance: 'warn'
    }
  ]

  // Tüm taskleri döndürür.
  getTasks(): Task[] {
    return this.tasks
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

  /* Verilen filtredeki kategoriye sahip olan
    tamamlanmış görevleri siler, yeni arrayi döndürür 
  */
  deleteDone(filter: string): Task[] {
    let filteredTasks: Task[] = [];
    this.tasks.forEach(t => {
      if (!(t.category === filter && t.done)) {
        filteredTasks.push(t)
      }
    })
    this.tasks = [...filteredTasks]
    return this.tasks
  }

  /* Verilen filtredeki kategoriye sahip olan
    tüm görevleri siler.
   */
  deleteAll(filter: string): Task[] {
    this.tasks = this.tasks.filter(t => t.category !== filter)
    return this.tasks
  }

  constructor() { }
}

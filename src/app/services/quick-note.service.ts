import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuickNoteService {

  quickNotes = [
    {
      title: 'Marketten Alınacaklar',
      subNotes: [
        {
          note: 'süt',
          done: true
        },
        {
          note: 'yumurta',
          done: false
        },
        {
          note: 'ekmek',
          done: false
        },
      ]
    }
  ]

  constructor() { }

  getQuickNotes() {
    return this.quickNotes
  }

  addQuickNoteTitle(title: string) {
    this.quickNotes.push({
      title: title,
      subNotes: []
    })
    return this.quickNotes
  }

  deleteQuickNoteTitle(title: string) {
    this.quickNotes = this.quickNotes.filter(n => n.title !== title)
    return this.quickNotes
  }

  addQuickNote(title, subnote) {
    this.quickNotes
      .find(n => n.title === title)
      .subNotes.push(subnote)
  }

  toggleQuickNote(note, subnote) {
    const noteToToggle = this.quickNotes
      .find(n => n.title === note.title)
      .subNotes
      .find(sn => sn.note === subnote)

      noteToToggle.done = !noteToToggle.done
  }
}

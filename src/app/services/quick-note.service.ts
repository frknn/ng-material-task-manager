import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuickNoteService {

  // Örnek hızlı notlar arrayi
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

  // Hızlı notları döndürür
  getQuickNotes() {
    return this.quickNotes
  }

  /* Hızlı not listesi oluşturmak için girilen görev başlığını
    kullanarak boş bir hızlı not listesi yaratır.
  */
  addQuickNoteTitle(title: string) {
    this.quickNotes.push({
      title: title,
      subNotes: []
    })
    return this.quickNotes
  }

  /*  İstenen hızlı görev listesini parametre olarak verilen
    stringi kullanarak bulup siler.
   */
  deleteQuickNoteTitle(title: string) {
    this.quickNotes = this.quickNotes.filter(n => n.title !== title)
    return this.quickNotes
  }

  /* Parametre olarak verilen hızlı listeye,
    yine parametre olarak verilen alt notu ekler. 
  */
  addQuickNote(title, subnote) {
    this.quickNotes
      .find(n => n.title === title)
      .subNotes.push(subnote)
  }

  /* Parametre olarak verilen not başlığına göre listeyi bulur,
    Yine parametre olarak verilen alt notu, listenin subNotes
    listesinde bulur, "done" propertysini toggle eder. 
  */
  toggleQuickNote(note, subnote) {
    const noteToToggle = this.quickNotes
      .find(n => n.title === note.title)
      .subNotes
      .find(sn => sn.note === subnote)

    noteToToggle.done = !noteToToggle.done
  }
}

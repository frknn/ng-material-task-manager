import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QuickNoteService } from 'src/app/services/quick-note.service';

@Component({
  selector: 'app-quick-note',
  templateUrl: './quick-note.component.html',
  styleUrls: ['./quick-note.component.css']
})
export class QuickNoteComponent implements OnInit {

  /* Bu componentte gösterebilmek için üst componentten
    note değişkeni input olarak alınır.
    Bir not silinmek istendiğinde üst componentteki array'den
    kaldırılması için notun ismi output olarak gönderilir.
  */
  @Input() note;
  @Output() deleteQuickNoteTitleFromParent: EventEmitter<string> = new EventEmitter()

  /* Not eklemek için konan inputu kontrol etmek
    ve notları gösterebilmek için tanımlanan değişkenler.
  */
  quickNote: string;
  notes = [];

  constructor(private quickNoteService: QuickNoteService) { }

  ngOnInit() {
    this.notes = this.note.subNotes
  }

  // Üst componente output olarak silinmek istenen notun ismini gönderir.
  deleteQuickNoteTitle(note) {
    this.deleteQuickNoteTitleFromParent.emit(note)
  }

  /* Yeni bir alt not yaratılır ve servis aracılığıyla
    üst not başlığının altındaki arraye eklenir.
  */
  addQuickNote() {
    const newNote = {
      note: this.quickNote,
      done: false
    }
    this.quickNoteService.addQuickNote(this.note.title, newNote)
    this.quickNote = "";
  }

  // Alt notları tamamlayıp geri almaya yarayan toggle fonksiyonu
  toggleNote(note, subnote) {
    subnote.done = !subnote.done
    this.quickNoteService.toggleQuickNote(note, subnote)
  }

}

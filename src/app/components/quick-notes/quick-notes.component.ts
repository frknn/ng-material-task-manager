import { Component, OnInit } from '@angular/core';
import { QuickNoteService } from 'src/app/services/quick-note.service';

@Component({
  selector: 'app-quick-notes',
  templateUrl: './quick-notes.component.html',
  styleUrls: ['./quick-notes.component.css']
})
export class QuickNotesComponent implements OnInit {

  /* Not başlığı inputunu kontrol etmek için bir string
    ve notların servisten alınıp tutulacağı bir array.
  */
  note: string;
  quickNotes = [];

  constructor(private quickNoteService: QuickNoteService) { }

  // Component yaratılırken servisten hızlı notlar çekilip değişkene atanır.
  ngOnInit() {
    this.quickNotes = this.quickNoteService.getQuickNotes()
  }

  // Not başlığı eklemek için gerekli fonksiyon
  addQuickNoteTitle() {
    this.quickNotes = this.quickNoteService.addQuickNoteTitle(this.note)
    this.note = "";
  }

  // Not başlığı silmek için gerekli fonksiyon
  deleteQuickNoteTitle(note: string){
    this.quickNotes = this.quickNoteService.deleteQuickNoteTitle(note)
  }

}

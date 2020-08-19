import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QuickNoteService } from 'src/app/services/quick-note.service';

@Component({
  selector: 'app-quick-note',
  templateUrl: './quick-note.component.html',
  styleUrls: ['./quick-note.component.css']
})
export class QuickNoteComponent implements OnInit {

  @Input() note;
  @Output() deleteQuickNoteTitleFromParent: EventEmitter<string> = new EventEmitter()
  quickNote: string;
  notes = [];

  constructor(private quickNoteService: QuickNoteService) { }

  ngOnInit() {
    this.notes = this.note.subNotes
  }

  deleteQuickNoteTitle(note) {
    this.deleteQuickNoteTitleFromParent.emit(note)
  }

  addQuickNote() {
    const newNote = {
      note: this.quickNote,
      done: false
    }
    this.quickNoteService.addQuickNote(this.note.title,newNote)
    this.quickNote = "";
  }

  toggleNote(note, subnote) {
    subnote.done = !subnote.done
    this.quickNoteService.toggleQuickNote(note, subnote)
  }

}

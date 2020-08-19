import { Component, OnInit } from '@angular/core';
import { QuickNoteService } from 'src/app/services/quick-note.service';

@Component({
  selector: 'app-quick-notes',
  templateUrl: './quick-notes.component.html',
  styleUrls: ['./quick-notes.component.css']
})
export class QuickNotesComponent implements OnInit {

  note: string;
  quickNotes = [];

  constructor(private quickNoteService: QuickNoteService) { }

  ngOnInit() {
    this.quickNotes = this.quickNoteService.getQuickNotes()
  }

  addQuickNoteTitle() {
    this.quickNotes = this.quickNoteService.addQuickNoteTitle(this.note)
    this.note = "";
  }

  deleteQuickNoteTitle(note: string){
    this.quickNotes = this.quickNoteService.deleteQuickNoteTitle(note)
  }

}

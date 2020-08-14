import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-done-tasks-dialog',
  templateUrl: './done-tasks-dialog.component.html',
  styleUrls: ['./done-tasks-dialog.component.css']
})
export class DoneTasksDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

import { DatePipe } from '@angular/common';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TaskComponent } from './components/task/task.component';
import { QuickViewComponent } from './components/quick-view/quick-view.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { GoalsComponent } from './components/goals/goals.component';
import { DoneTasksDialogComponent } from './components/done-tasks-dialog/done-tasks-dialog.component';
import { NavButtonsComponent } from './components/nav-buttons/nav-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskComponent,
    routingComponents,
    QuickViewComponent,
    EditTaskComponent,
    ActivitiesComponent,
    GoalsComponent,
    DoneTasksDialogComponent,
    NavButtonsComponent
  ],
  entryComponents: [DoneTasksDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

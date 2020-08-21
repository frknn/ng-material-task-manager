import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { QuickViewComponent } from './components/quick-view/quick-view.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { GoalsComponent } from './components/goals/goals.component';
import { QuickNotesComponent } from './components/quick-notes/quick-notes.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'

const routes: Routes = [
  { path: "", redirectTo: '/ana-sayfa', pathMatch: 'full' },
  { path: "ana-sayfa", component: TasksComponent },
  { path: "ekle", component: CreateTaskComponent },
  { path: "hizli", component: QuickViewComponent },
  { path: "aktiviteler", component: ActivitiesComponent },
  { path: "hedefler", component: GoalsComponent },
  { path: "hizli-notlar", component: QuickNotesComponent },
  { path: "duzenle/:id", component: EditTaskComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  TasksComponent,
  CreateTaskComponent,
  QuickViewComponent,
  EditTaskComponent,
  ActivitiesComponent,
  GoalsComponent,
  QuickNotesComponent,
  PageNotFoundComponent
]

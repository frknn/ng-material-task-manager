import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { QuickViewComponent } from './components/quick-view/quick-view.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { ActivitiesComponent } from './components/activities/activities.component';

const routes: Routes = [
  { path: "", component: TasksComponent },
  { path: "ekle", component: CreateTaskComponent },
  { path: "hizli", component: QuickViewComponent },
  { path: "aktiviteler", component: ActivitiesComponent},
  { path: "duzenle/:id", component: EditTaskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TasksComponent, CreateTaskComponent, QuickViewComponent, EditTaskComponent, ActivitiesComponent]

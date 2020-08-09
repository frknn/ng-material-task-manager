import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';

const routes: Routes = [
  {path:"", component: TasksComponent},
  {path:"ekle", component: CreateTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TasksComponent, CreateTaskComponent]

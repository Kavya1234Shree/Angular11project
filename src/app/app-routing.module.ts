import { ListuserdComponent } from './listuserd/listuserd.component';
import { AdduserdComponent } from './adduserd/adduserd.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '',       component:HomeComponent, pathMatch: "full"},
  { path: 'adduserd',      component: AdduserdComponent}, 
  { path: 'listuserd',      component: ListuserdComponent},
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

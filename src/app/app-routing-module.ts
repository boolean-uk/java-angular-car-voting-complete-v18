import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { List } from './cars/list/list';
import { Add } from './cars/add/add';
import { View } from './cars/view/view';

const routes: Routes = [
  {
    path: "cars",
    component: List,
  },
  {
    path: "cars/add",
    component: Add,
  },
  {
    path: "cars/:id",
    component: View
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

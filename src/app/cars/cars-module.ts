import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Add } from './add/add';
import { View } from './view/view';
import { List } from './list/list';
import { Edit } from './edit/edit';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [Add, View, List, Edit],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [Add, View, List, Edit],
})
export class CarsModule {}

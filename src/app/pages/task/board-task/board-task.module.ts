import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardTaskComponent } from './board-task.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';
import {SqueezeBoxModule} from 'squeezebox';

export const boardRoutes: Routes = [
  {
    path: '',
    component: BoardTaskComponent,
    data: {
      breadcrumb: 'Task Board',
      icon: 'icofont icofont-tasks-alt bg-c-pink',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - Task Board',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(boardRoutes),
    SharedModule,
    SqueezeBoxModule
  ],
  declarations: [BoardTaskComponent]
})
export class BoardTaskModule { }

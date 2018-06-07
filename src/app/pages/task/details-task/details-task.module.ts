import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsTaskComponent } from './details-task.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';
import {UiSwitchModule} from 'ng2-ui-switch';

export const detailsRoutes: Routes = [
  {
    path: '',
    component: DetailsTaskComponent,
    data: {
      breadcrumb: 'Task Details',
      icon: 'icofont icofont-tasks-alt bg-c-pink',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - Task Details',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(detailsRoutes),
    SharedModule,
    UiSwitchModule
  ],
  declarations: [DetailsTaskComponent]
})
export class DetailsTaskModule { }

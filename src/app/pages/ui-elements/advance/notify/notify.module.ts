import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotifyComponent } from './notify.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../shared/shared.module';
import {SimpleNotificationsModule} from 'angular2-notifications';

export const notifyRoutes: Routes = [
  {
    path: '',
    component: NotifyComponent,
    data: {
      breadcrumb: 'PNOTIFY',
      icon: 'icofont-listine-dots bg-c-pink',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - PNOTIFY',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(notifyRoutes),
    SharedModule,
    SimpleNotificationsModule.forRoot()
  ],
  declarations: [NotifyComponent]
})
export class NotifyModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetStaticComponent } from './widget-static.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const WidgetStaticRoutes: Routes = [
  {
    path: '',
    component: WidgetStaticComponent,
    data: {
      breadcrumb: 'Widget Static',
      icon: 'icofont-speed-meter bg-c-blue',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - Widget Static',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(WidgetStaticRoutes),
    SharedModule
  ],
  declarations: [WidgetStaticComponent]
})
export class WidgetStaticModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetChartComponent } from './widget-chart.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const WidgetChartRoutes: Routes = [
  {
    path: '',
    component: WidgetChartComponent,
    data: {
      breadcrumb: 'Widget Chart',
      icon: 'icofont-speed-meter bg-c-blue',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - Widget Chart',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(WidgetChartRoutes),
    SharedModule
  ],
  declarations: [WidgetChartComponent]
})
export class WidgetChartModule { }

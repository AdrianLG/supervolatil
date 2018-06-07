import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetAdvanceComponent } from './widget-advance.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';
import { ChartModule } from 'angular2-chartjs';

export const WidgetChartAdvanceRoutes: Routes = [
  {
    path: '',
    component: WidgetAdvanceComponent,
    data: {
      breadcrumb: 'Widget Advanced',
      icon: 'icofont-speed-meter bg-c-blue',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - Widget Advanced',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(WidgetChartAdvanceRoutes),
    SharedModule,
    ChartModule
  ],
  declarations: [WidgetAdvanceComponent]
})
export class WidgetAdvanceModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EchartComponent } from './echart.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';
import {AngularEchartsModule} from 'ngx-echarts';

export const echartRoutes: Routes = [
  {
    path: '',
    component: EchartComponent,
    data: {
      breadcrumb: 'E-Chart Chart',
      icon: 'icofont-chart-bar-graph bg-c-blue',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - E-Chart Chart',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(echartRoutes),
    SharedModule,
    AngularEchartsModule
  ],
  declarations: [EchartComponent]
})
export class EchartModule { }

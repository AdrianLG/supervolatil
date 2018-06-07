import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicDatatableComponent } from './basic-datatable.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../../shared/shared.module';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';

export const basicRoutes: Routes = [
  {
    path: '',
    component: BasicDatatableComponent,
    data: {
      breadcrumb: 'Basic Table',
      icon: 'icofont-table bg-c-blue',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - Basic Table',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(basicRoutes),
    SharedModule,
    NgxDatatableModule
  ],
  declarations: [BasicDatatableComponent]
})
export class BasicDatatableModule { }

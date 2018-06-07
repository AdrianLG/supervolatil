import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VectorComponent } from './vector.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';

export const vectorRoutes: Routes = [
  {
    path: '',
    component: VectorComponent,
    data: {
      breadcrumb: 'Vector Map',
      icon: 'icofont-map bg-c-pink',
      breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - Vector Map',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(vectorRoutes),
    SharedModule
  ],
  declarations: [VectorComponent]
})
export class VectorModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AccesoComponent } from './acceso.component';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export const AccesoRoutes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Acceso'
    },
    children: [
      {
        path: 'acceso',
        component: AccesoComponent,
        data: {
          breadcrumb: 'Acceso'
        }
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AccesoRoutes),
    SharedModule,
    FormsModule
  ],
  declarations: [AccesoComponent]
})
export class AccesoModule { }

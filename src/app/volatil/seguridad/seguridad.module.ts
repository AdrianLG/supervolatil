import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export const SeguridadRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: './acceso/acceso.module#AccesoModule',
        data: {
          breadcrumb: 'Login'
        }
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SeguridadRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: []
})
export class SeguridadModule { }

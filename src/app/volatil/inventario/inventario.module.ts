import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventarioComponent } from './inventario.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

export const InventarioRoutes: Routes = [
  {
    path: '',
    component: InventarioComponent,
    data: {
      breadcrumb: 'Inventario',
      breadcrumb_caption: 'Control de Productos',
      icon: 'icofont icofont-file-document bg-c-pink',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(InventarioRoutes),
    SharedModule
  ],
  declarations: [InventarioComponent]
})
export class InventarioModule {
}

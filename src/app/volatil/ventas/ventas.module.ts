import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentasComponent } from './ventas.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

export const VentasRoutes: Routes = [
  {
    path: '',
    component: VentasComponent,
    data: {
      breadcrumb: 'Ventas',
      breadcrumb_caption: 'Generación de Comprobantes de ventas',
      icon: 'icofont icofont-bill bg-c-lite-green',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(VentasRoutes),
    SharedModule
  ],
  declarations: [VentasComponent]
})
export class VentasModule {
}

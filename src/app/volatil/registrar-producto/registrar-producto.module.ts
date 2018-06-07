import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrarProductoComponent } from './registrar-producto.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

export const RegistrarProductoRoutes: Routes = [
  {
    path: '',
    component: RegistrarProductoComponent,
    data: {
      breadcrumb: 'Registrar Producto',
      breadcrumb_caption: 'Añadir productos a la base de datos',
      icon: 'icofont icofont-bill bg-c-lite-green',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(RegistrarProductoRoutes),
    SharedModule
  ],
  declarations: [RegistrarProductoComponent]
})
export class RegistrarProductoModule {
}

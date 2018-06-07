import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

export const InicioRoutes: Routes = [
  {
    path: '',
    component: InicioComponent,
    data: {
      breadcrumb: 'Inicio',
      breadcrumb_caption: 'Bienvenido al Sitio Administrativo del Super Volatil',
      icon: 'icofont icofont-home bg-c-blue',
      status: true
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(InicioRoutes),
    SharedModule
  ],
  declarations: [InicioComponent]
})
export class InicioModule {
}

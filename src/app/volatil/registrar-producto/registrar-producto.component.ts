import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { transition, trigger, style, animate } from '@angular/animations';
import swal from 'sweetalert2';
import { BackendService } from "../../backend.service";

@Component({
  selector: 'app-registrar-producto',
  templateUrl: './registrar-producto.component.html',
  styleUrls: [
    './registrar-producto.component.css',
    '../../../../node_modules/sweetalert2/dist/sweetalert2.min.css',
  ],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('fadeInOutTranslate', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms ease-in-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'translate(0)' }),
        animate('400ms ease-in-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class RegistrarProductoComponent implements OnInit {

  public unidadDeMedida: string = 'pieza';

  constructor(private backend: BackendService) { }

  ngOnInit() {
  }

  agregarProveedor() {
    swal({
      title: 'Introduzca el NUEVO Proveedor',
      input: 'text',
      showCancelButton: true,
      confirmButtonText: 'Agregar'
    }).then(proveedor => {
      if(proveedor){
        this.backend.get('RegistrarProveedor',{proveedor:proveedor}).then(res=>{
          console.log('RES PROVEEDOR',res);
        });
      }
    }).catch(error => {

    });
  }

}

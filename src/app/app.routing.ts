import {Routes} from '@angular/router';
import {AdminComponent} from './layout/admin/admin.component';
import {AuthComponent} from './layout/auth/auth.component';

import { AuthGuard } from "./auth.guard";

export const AppRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
      }, {
        path: 'dashboard',
        loadChildren: './pages/dashboard/dashboard.module#DashboardModule'
      }, {
        path: 'widget',
        loadChildren: './pages/widget/widget.module#WidgetModule'
      }, {
        path: 'basic',
        loadChildren: './pages/ui-elements/basic/basic.module#BasicModule'
      }, {
        path: 'advance',
        loadChildren: './pages/ui-elements/advance/advance.module#AdvanceModule'
      }, {
        path: 'animations',
        loadChildren: './pages/animations/animations.module#AnimationsModule'
      }, {
        path: 'forms',
        loadChildren: './pages/ui-elements/forms/forms.module#FormsModule'
      }, {
        path: 'bootstrap-table',
        loadChildren: './pages/ui-elements/tables/bootstrap-table/bootstrap-table.module#BootstrapTableModule',
      }, {
        path: 'data-table',
        loadChildren: './pages/ui-elements/tables/data-table/data-table.module#DataTableModule',
      }, {
        path: 'charts',
        loadChildren: './pages/charts/charts.module#ChartsModule',
      }, {
        path: 'map',
        loadChildren: './pages/map/map.module#MapModule',
      }, {
        path: 'maintenance/error',
        loadChildren: './pages/maintenance/error/error.module#ErrorModule'
      }, {
        path: 'maintenance/coming-soon',
        loadChildren: './pages/maintenance/coming-soon/coming-soon.module#ComingSoonModule'
      }, {
        path: 'user',
        loadChildren: './pages/user/user.module#UserModule'
      }, {
        path: 'crm-contact',
        loadChildren: './pages/ui-elements/crm-contact/crm-contact.module#CrmContactModule'
      }, {
        path: 'task',
        loadChildren: './pages/task/task.module#TaskModule'
      }, {
        path: 'editor',
        loadChildren: './pages/ui-elements/editor/editor.module#EditorModule'
      }, {
        path: 'invoice',
        loadChildren: './pages/invoice/invoice.module#InvoiceModule'
      }, {
        path: 'file-upload',
        loadChildren: './pages/ui-elements/file-upload/file-upload.module#FileUploadUIModule'
      }, {
        path: 'change-log',
        loadChildren: './pages/change-log/change-log.module#ChangeLogModule'
      }, {
        path: 'simple-page',
        loadChildren: './pages/simple-page/simple-page.module#SimplePageModule'
      }
      
      , {
        path: 'inicio',
        loadChildren: './volatil/inicio/inicio.module#InicioModule',
        canActivate: [AuthGuard]
      }, {
        path: 'inventario',
        loadChildren: './volatil/inventario/inventario.module#InventarioModule',
        canActivate: [AuthGuard]
      }, {
        path: 'registrarProducto',
        loadChildren: './volatil/registrar-producto/registrar-producto.module#RegistrarProductoModule',
        canActivate: [AuthGuard]
      }, {
        path: 'ventas',
        loadChildren: './volatil/ventas/ventas.module#VentasModule',
        canActivate: [AuthGuard]
      }

    ]
  }, {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: './pages/authentication/authentication.module#AuthenticationModule'
      }, {
        path: 'maintenance/offline-ui',
        loadChildren: './pages/maintenance/offline-ui/offline-ui.module#OfflineUiModule'
      }

      , {
        path: 'seguridad',
        loadChildren: './volatil/seguridad/seguridad.module#SeguridadModule'
      }

    ]
  },

  { 
    path: '**',
    redirectTo: '/maintenance/offline-ui'
  },
  

];

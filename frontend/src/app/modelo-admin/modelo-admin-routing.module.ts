import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearuserComponent } from '../components/crearuser/crearuser.component';
import { LeeruserComponent } from '../components/leeruser/leeruser.component';
import { TrabajadoresComponent } from '../components/trabajadores/trabajadores.component';
import { ReparacionesComponent } from '../components/reparaciones/reparaciones.component';
import { MarcasComponent } from '../components/marcas/marcas.component';
import { ModelosComponent } from '../components/modelos/modelos.component';
import { AdminComponent } from '../views/admin/admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PuestosComponent } from '../components/puestos/puestos.component';
import { EmpresasComponent } from '../components/empresas/empresas.component';
import { CrearpedidoComponent } from '../components/crearpedido/crearpedido.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'listUsuarios',
        component: LeeruserComponent
      },
      {
        path: 'newUser',
        component: CrearuserComponent
      },
      {
        path: 'workers',
        component: TrabajadoresComponent
      },
      {
        path: 'repairs',
        component: ReparacionesComponent
      },
      {
        path: 'marcas',
        component: MarcasComponent
      },
      {
        path: 'modelos',
        component: ModelosComponent
      },
      {
        path: 'puestos',
        component: PuestosComponent
      },
      {
        path: 'empresas',
        component: EmpresasComponent
      },
      {
        path: 'newPedido',
        component: CrearpedidoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
  ReactiveFormsModule],
  exports: [RouterModule]
})
export class ModeloAdminRoutingModule { }

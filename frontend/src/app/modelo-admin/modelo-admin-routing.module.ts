import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearuserComponent } from '../components/crearuser/crearuser.component';
import { LeeruserComponent } from '../components/leeruser/leeruser.component';
import { TrabajadoresComponent } from '../components/trabajadores/trabajadores.component';
import { ReparacionesComponent } from '../components/reparaciones/reparaciones.component';
import { MarcasComponent } from '../components/marcas/marcas.component';
import { ModelosComponent } from '../components/modelos/modelos.component';
import { AdminComponent } from '../views/admin/admin.component';


const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'newUser',
        component: CrearuserComponent
      },
      {
        path: 'listUsuarios',
        component: LeeruserComponent
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
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModeloAdminRoutingModule { }

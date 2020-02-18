import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModeloAdminRoutingModule } from './modelo-admin-routing.module';
import { BarranavegacionAdminComponent } from '../components/barranavegacion-admin/barranavegacion-admin.component';
import { CrearuserComponent } from '../components/crearuser/crearuser.component';
import { TrabajadoresComponent } from '../components/trabajadores/trabajadores.component';
import { EstadosComponent } from '../components/estados/estados.component';
import { ReparacionesComponent } from '../components/reparaciones/reparaciones.component';
import { ModelosComponent } from '../components/modelos/modelos.component';
import { MarcasComponent } from '../components/marcas/marcas.component';
import { LeeruserComponent } from '../components/leeruser/leeruser.component';
import { AdminComponent } from '../views/admin/admin.component';


@NgModule({
  declarations: [
    AdminComponent,
    BarranavegacionAdminComponent,
    LeeruserComponent,
    MarcasComponent,
    ModelosComponent,
    ReparacionesComponent,
    EstadosComponent,
    TrabajadoresComponent,
    CrearuserComponent
  ],
  imports: [
    CommonModule,
    ModeloAdminRoutingModule
  ]
})
export class ModeloAdminModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule } from '@angular/forms';
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
import { PuestosComponent } from '../components/puestos/puestos.component';
import { EmpresasComponent } from '../components/empresas/empresas.component';
import { CrearpedidoComponent } from '../components/crearpedido/crearpedido.component';
import { NotifyadminComponent } from '../components/errores/notifyadmin/notifyadmin.component';


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
    CrearuserComponent,
    PuestosComponent,
    EmpresasComponent,
    CrearpedidoComponent,
    NotifyadminComponent,

  ],
  imports: [
    CommonModule,
    ModeloAdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class ModeloAdminModule { }

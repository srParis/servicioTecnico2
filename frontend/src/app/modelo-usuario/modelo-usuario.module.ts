import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModeloUsuarioRoutingModule } from './modelo-usuario-routing.module';
import { BarranavegacionComponent } from '../components/barranavegacion/barranavegacion.component';
import { UserComponent } from '../views/user/user.component';
import { UserInicioComponent } from '../components/user-inicio/user-inicio.component';
import { ListarReparacionesUserComponent } from '../components/listar-reparaciones-user/listar-reparaciones-user.component';




@NgModule({
  declarations: [
    BarranavegacionComponent,
    UserComponent,
    UserInicioComponent,
    ListarReparacionesUserComponent
  ],
  imports: [
    CommonModule,
    ModeloUsuarioRoutingModule
  ]
})
export class ModeloUsuarioModule { }

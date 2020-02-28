import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from '../views/user/user.component';
import { UserInicioComponent } from '../components/user-inicio/user-inicio.component';
import { ListarReparacionesUserComponent } from '../components/listar-reparaciones-user/listar-reparaciones-user.component';



const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
      path: 'links',
      component: UserInicioComponent
      },
      {
      path: 'listRep',
      component: ListarReparacionesUserComponent
      }]
  }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModeloUsuarioRoutingModule { }

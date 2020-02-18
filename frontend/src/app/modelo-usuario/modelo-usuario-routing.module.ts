import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from '../views/user/user.component';
import { CrearuserComponent } from '../components/crearuser/crearuser.component';
import { LeeruserComponent } from '../components/leeruser/leeruser.component';


const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
    {
    path: 'links',
    component: CrearuserComponent
    },
    {
    path: 'info',
    component: LeeruserComponent
    }
    ]
    }
    ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModeloUsuarioRoutingModule { }
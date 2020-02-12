import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { RegistrarComponent } from './views/registrar/registrar.component';
import { AdminComponent } from './views/admin/admin.component';
import { UserComponent } from './views/user/user.component';
import { MarcasComponent } from './components/marcas/marcas.component';
import { ModelosComponent } from './components/modelos/modelos.component';
import { CrearuserComponent } from './components/crearuser/crearuser.component';
import { LeeruserComponent } from './components/leeruser/leeruser.component';
import { TrabajadoresComponent } from './components/trabajadores/trabajadores.component';
import { ReparacionesComponent } from './components/reparaciones/reparaciones.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
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
    path: 'user',
    component: UserComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'registrar',
    component: RegistrarComponent
  },
  {
    path: 'marcas',
    component: MarcasComponent
  },
  {
    path: 'modelos',
    component: ModelosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// export const APP_ROUTING = RouterModule.forRoot(routes);

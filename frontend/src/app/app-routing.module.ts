import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { RegistrarComponent } from './views/registrar/registrar.component';
import { AdminComponent } from './views/admin/admin.component';
import { UserComponent } from './views/user/user.component';
import { MarcasComponent } from './components/marcas/marcas.component';
import { ModelosComponent } from './components/modelos/modelos.component';

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

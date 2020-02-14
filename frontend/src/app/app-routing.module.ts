import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { RegistrarComponent } from './views/registrar/registrar.component';
import { AdminComponent } from './views/admin/admin.component';
import { UserComponent } from './views/user/user.component';



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
    path: 'user',
    component: UserComponent,
    // loadChildren: () => import('./modelo-usuario/modelo-usuario.module').then(m => m.ModeloUsuarioModule)
  },
  {
    path: 'admin',
    component: AdminComponent,
    // loadChildren: () => import('./modelo-admin/modelo-admin.module')
  },
  {
    path: 'registrar',
    component: RegistrarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// export const APP_ROUTING = RouterModule.forRoot(routes);

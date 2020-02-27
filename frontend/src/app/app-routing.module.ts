import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { RegistrarComponent } from './views/registrar/registrar.component';
import { AdminComponent } from './views/admin/admin.component';
import { UserComponent } from './views/user/user.component';
import { ModeloUsuarioModule } from './modelo-usuario/modelo-usuario.module';
import { GLoginUserGuard } from './services/glogin-user.guard';


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
    loadChildren: () => import('./modelo-usuario/modelo-usuario.module').then(m => ModeloUsuarioModule),
    // canActivate: [GLoginUserGuard]
  },
  {
    path: 'admin',
    loadChildren: () => import('./modelo-admin/modelo-admin.module').then(m => m.ModeloAdminModule)
    // canActivate: [GLoginUserGuard]
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

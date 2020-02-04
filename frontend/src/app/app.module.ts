import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BarranavegacionComponent } from './components/barranavegacion/barranavegacion.component';
import { CrearuserComponent } from './components/crearuser/crearuser.component';
import { LeeruserComponent } from './components/leeruser/leeruser.component';
import { LoginComponent } from './views/login/login.component';
import { AdminComponent } from './views/admin/admin.component';
import { UserComponent } from './views/user/user.component';
import { RegistrarComponent } from './views/registrar/registrar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BarranavegacionComponent,
    CrearuserComponent,
    LeeruserComponent,
    LoginComponent,
    AdminComponent,
    UserComponent,
    RegistrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

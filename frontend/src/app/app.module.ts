import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { RegistrarComponent } from './views/registrar/registrar.component';
import { ModeloUsuarioModule } from './modelo-usuario/modelo-usuario.module';
import { ModeloAdminModule } from './modelo-admin/modelo-admin.module';
import { GLoginUserGuard } from './services/glogin-user.guard';
import { CompruebatokenService } from './services/compruebatoken.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [
    GLoginUserGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CompruebatokenService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

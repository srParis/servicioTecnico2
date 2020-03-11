import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from 'src/app/modelos/modelos';
import { UsuarioService } from 'src/app/services/usuario.service';

import { AuthService } from 'angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { CompileShallowModuleMetadata } from '@angular/compiler';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formlogin: FormGroup;
  public usuarios: Usuario;
  private patron = '[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}';

  private user: SocialUser;
  private loggedIn: boolean;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private usuarioService: UsuarioService,
              private authService: AuthService) {
    this.formlogin = formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(this.patron)]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);

    this.authService.authState.subscribe((user) => {

      this.user = user;
      this.loggedIn = (user != null);

      if (user != null) {
        console.log('ENTRO AL IF');
        this.usuarioService.getLoginGF(this.user.email).subscribe(
          res => {
            try {
              if (res.message) {
                // Mostrar mensaje error
              } else {
                if (res.usuario[0].rol === 'user') {
                  localStorage.setItem('token', res.accessToken);
                  this.router.navigate(['/user']);
                }
              }
            } catch (error) { }
          },
          err => {
            console.log(err);
          }
        );
      }
    });
  }

 /* signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log(this.user);
      console.log('------------' + this.user.email);
      this.loggedIn = (user != null);
      if (user != null) {
        this.usuarioService.getLoginGF(this.user.email).subscribe(
          res => {
            try {
              if (res.message) {
                // Mostrar mensaje error
              } else {
                console.log('--------------------------' + res.usuario[0].rol);
                console.log('--------------------------' + res.accessToken);
                // localStorage.setItem('tipo', this.usuarios.password);
                if (res.usuario[0].rol === 'user') {
                  localStorage.setItem('token', res.accessToken);
                  this.router.navigate(['/user']);
                } else {
                  localStorage.setItem('token_admin', res.accessToken);
                  this.router.navigate(['/admin']);
                }
              }
            } catch (error) { }
          },
          err => {
            console.log(err);
          }
        );
      }

    });
  }*/

  signOut(): void {
    this.authService.signOut();
  }

  ngOnInit() {
    if (localStorage.getItem('token')) {
      this.router.navigate(['/user']);
    }
    if (localStorage.getItem('token_admin')) {
      this.router.navigate(['/admin']);
    }
  }

  submit() {
    this.usuarioService.getLogin(this.formlogin.value).subscribe(
      res => {
        try {
          if (res.message) {
            // Mostrar mensaje error
          } else {
            console.log('--------------------------' + res.usuario[0].rol);
            console.log('--------------------------' + res.accessToken);
            if (res.usuario[0].rol === 'user') {
              localStorage.setItem('token', res.accessToken);
              this.router.navigate(['/user']);
            } else {
              localStorage.setItem('token_admin', res.accessToken);
              this.router.navigate(['/admin']);
            }
          }
        } catch (error) { }
      },
      err => {
        console.log(err);
      }
    );
  }

  get email() {
    return this.formlogin.get('email');
  }

  get password() {
    return this.formlogin.get('password');
  }
}

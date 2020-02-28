import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from 'src/app/modelos/modelos';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formlogin: FormGroup;
  public usuarios: Usuario;
  private patron = '[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}';

  constructor( private router: Router, private formBuilder: FormBuilder, private usuarioService: UsuarioService) {
    this.formlogin = formBuilder.group({
      email: ['', [Validators.required,  Validators.pattern(this.patron)]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  ngOnInit() {
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
            // localStorage.setItem('tipo', this.usuarios.password);
            if (res.usuario[0].rol === 'user') {
              localStorage.setItem('token', res.accessToken);
              this.router.navigate(['/user']);
            } else {
              localStorage.setItem('token_admin', res.accessToken);
              this.router.navigate(['/admin']);
            }
          }
        } catch (error) {}
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

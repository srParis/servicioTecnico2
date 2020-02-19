import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
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

  constructor( private router: Router, private formBuilder: FormBuilder, private usuarioService: UsuarioService) {
    this.formlogin = formBuilder.group({
      nombre: [''],
      imagen: ['']
    });
  }

  ngOnInit() {
  }


    // if (this.loginForm.invalid) {
    //   this.loginForm.setErrors({ login: literal.errors.emptyForms });
    //   return;
    // }
    // this.loading = true;

    // setTimeout(() => {
    //   this.serviceLogin.checkLogin().subscribe(data => {
    //     this.serviceLogin.setDatosForm(data);
    //     localStorage.setItem('userData', JSON.stringify(data));
    //     if (data.user === this.loginForm.get('user').value && data.pass === +this.loginForm.get('pass').value) {
    //       this.route.navigateByUrl('/main');
    //     } else {
    //       this.loginForm.setErrors({ login: literal.errors.login });
    //     }
    //     this.loading = false;
    //   });
    // }, 1000);
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario, Poblacion } from 'src/app/modelos/modelos';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { PoblacionService } from 'src/app/services/poblacion.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {

  public formuser: FormGroup;
  public usuarios: Usuario;
  public poblaciones: Poblacion;
  private patron = '[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}';

  constructor( private router: Router, private formBuilder: FormBuilder,
               private usuarioService: UsuarioService, private poblacionService: PoblacionService) {
    this.formuser = formBuilder.group({
      email: ['', [Validators.required,  Validators.pattern(this.patron)]],
      password1: ['', [Validators.required, Validators.minLength(4)]],
      apellidos: [''],
      nombre: [''],
      dni: [''],
      telefono: [''],
      direccion: [''],
      imagen: [''],
      poblacion: [''],
      provincia: [''],
      cp: [''],
      password2: ['']
    });
  }
  ngOnInit() {
    this.poblacionService.getPoblaciones().subscribe(
      res => {
        console.log(res);
        this.poblaciones = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  submit() {
    this.usuarioService.saveUsuario(this.formuser.value).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  get email() {
    return this.formuser.get('email');
  }

  get password() {
    return this.formuser.get('password');
  }
}

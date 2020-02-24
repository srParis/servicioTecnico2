import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario, Poblacion, Provincia } from 'src/app/modelos/modelos';
import { MustMatch } from 'src/app/utilidades/validaciones';
import { ProvinciaService } from 'src/app/services/provincia.service';
import { PoblacionService } from 'src/app/services/poblacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crearuser',
  templateUrl: './crearuser.component.html',
  styleUrls: ['./crearuser.component.scss']
})
export class CrearuserComponent implements OnInit {

  private formregistrar: FormGroup;
  public usuarios: Usuario;
  public poblaciones: Poblacion;
  public provincias: Provincia;
  public cp: string;
  private patron = '[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}';


  constructor(private router: Router, private formBuilder: FormBuilder,
              private usuarioService: UsuarioService, private poblacionService: PoblacionService,
              private provinciaService: ProvinciaService) {


    this.formregistrar = formBuilder.group({

      email: ['', [Validators.required, Validators.pattern(this.patron)]],
      password1: ['', [Validators.required, Validators.minLength(4)]],
      password2: ['', [Validators.required]],
      apellidos: [''],
      nombre: [''],
      dni: [''],
      telefono: [''],
      direccion: [''],
      imagen: [''],
      poblacion: [''],
      provincia: [''],
      cp: ['']
    }, {
      validator: MustMatch('password1', 'password2')
    });

    // this.formuser.get('password2').setValidators(
    //   CustomValidators.equals(this.formuser.get('password1'))
    // );
  }

  ngOnInit() { }

  submit() {
    this.usuarioService.saveUsuario(this.formregistrar.value).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
  get email() {
    return this.formregistrar.get('email');
  }

  get password1() {
    return this.formregistrar.get('password1');
  }

  get password2() {
    return this.formregistrar.get('password2');
  }

  public onOptionsSelected(value: number) {
    // console.log('the selected value is ' + value);
    this.poblacionService.getPoblacionesProv(value).subscribe(
      res => {
        console.log(res);
        this.poblaciones = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  public onOptionsSelected2(value: string) {
    this.cp = value;
  }


}

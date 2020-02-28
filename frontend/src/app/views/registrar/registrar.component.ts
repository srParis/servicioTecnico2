import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Usuario, Poblacion, Provincia } from 'src/app/modelos/modelos';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { PoblacionService } from 'src/app/services/poblacion.service';
import { ProvinciaService } from 'src/app/services/provincia.service';
import { MustMatch } from 'src/app/utilidades/validaciones';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {

  public formuser: FormGroup;
  public usuarios: Usuario;
  public poblaciones: Poblacion;
  public provincias: Provincia;
  public cp: string;

  private patronEmail = '[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}';
  private patronDNI = '[0-9]{8}[A-Za-z]{1}';
  private patronNomb = '[A-Za-z]*';
  private patronApe = '[A-Za-z]*';
  private patronTLF = '[0-9]{0,9}';
  private patronDir = '[A-Za-z]*';

  constructor( private router: Router, private formBuilder: FormBuilder,
               private usuarioService: UsuarioService, private poblacionService: PoblacionService,
               private provinciaService: ProvinciaService) {
    this.formuser = formBuilder.group({
      email: ['', [Validators.required,  Validators.pattern(this.patronEmail)]],
      password1: ['', [Validators.required, Validators.minLength(4)]],
      password2: ['', [Validators.required]],
      apellidos: ['', [Validators.required, Validators.pattern(this.patronApe)]],
      nombre: ['', [Validators.required, Validators.pattern(this.patronNomb)]],
      dni: ['', [Validators.required, Validators.pattern(this.patronDNI)]],
      tlf: ['', [Validators.required, Validators.pattern(this.patronTLF)]],
      direccion: [''],
      num_dir: [''],
      piso_dir: [''],
      numpiso_dir: [''],
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
  ngOnInit() {
    this.provinciaService.getProvincias().subscribe(
      res => {
        console.log(res);
        this.provincias = res;
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

  get password1() {
    return this.formuser.get('password1');
  }

  get password2() {
    return this.formuser.get('password2');
  }

  get dni() {
    return this.formuser.get('dni');
  }

  get nombre() {
    return this.formuser.get('nombre');
  }

  get apellidos() {
    return this.formuser.get('apellidos');
  }

  get tlf() {
    return this.formuser.get('tlf');
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

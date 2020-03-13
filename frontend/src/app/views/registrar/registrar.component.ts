import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Usuario, Poblacion, Provincia, Direccion } from 'src/app/modelos/modelos';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { PoblacionService } from 'src/app/services/poblacion.service';
import { ProvinciaService } from 'src/app/services/provincia.service';
import { DireccionService } from 'src/app/services/direccion.service';
import { MustMatch } from 'src/app/utilidades/validaciones';
import { literal } from 'src/app/utilidades/es-Es';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {

  public formuser: FormGroup;
  private userRegis: FormGroup;
  public usuarios: Usuario;
  public poblaciones: Poblacion;
  public pobl: Poblacion;
  public provincias: Provincia;
  public direc: Direccion;
  public cp2: string;
  public idDir: number;

  private patronEmail = '[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}';
  private patronDNI = '[0-9]{8}[A-Za-z]{1}';
  private patronNomb = '[A-Za-z ]*';
  private patronApe = '[A-Za-z ]*';
  private patronTLF = '[0-9]{0,9}';
  private patronDir = '[A-Za-z/ ]*';
  private patronNum = '[0-9]*';

  constructor( private router: Router, private formBuilder: FormBuilder,
               private usuarioService: UsuarioService,
               private poblacionService: PoblacionService,
               private provinciaService: ProvinciaService,
               private direccionService: DireccionService) {
    this.formuser = formBuilder.group({
      email: ['', [Validators.required,  Validators.pattern(this.patronEmail)]],
      password1: ['', [Validators.required, Validators.minLength(4)]],
      password2: ['', [Validators.required]],
      apellidos: ['', [Validators.required, Validators.pattern(this.patronApe)]],
      nombre: ['', [Validators.required, Validators.pattern(this.patronNomb)]],
      dni: ['', [Validators.required, Validators.pattern(this.patronDNI)]],
      tlf: ['', [Validators.required, Validators.pattern(this.patronTLF)]],
      nombre_dir: ['', [Validators.required, Validators.pattern(this.patronDir)]],
      numero: ['', [Validators.required, Validators.pattern(this.patronNum)]],
      piso: ['', [Validators.pattern(this.patronDir)]],
      numeroPiso: ['', [Validators.pattern(this.patronNum)]],
      // imagen: [''],
      provincia: ['', [Validators.required]],
      poblacion: ['', [Validators.required]],
      cp: [''],
      rol: ['user'],
      direccion: ['']
    }, {
      validator: MustMatch('password1', 'password2')
    });

    // this.formuser.get('password2').setValidators(
    //   CustomValidators.equals(this.formuser.get('password1'))
    // );
  }
  ngOnInit() {
    this.cp2 = '';
    if (localStorage.getItem('token')) {
      this.router.navigate(['/user']);
    }
    if (localStorage.getItem('token_admin')) {
      this.router.navigate(['/admin']);
    }

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
    const userEm = this.formuser.get('email').value;
    this.usuarioService.userEmail(userEm).toPromise().then(
      res => {
        console.log('-------------------------');
        console.log(res);
        console.log('-------------------------');

        try {
          if (res.message === 'No existe ese usuario') {
            this.crearUser();
          } else {
            console.log('Estoy en el else');
            this.formuser.setErrors({ login: 'Ya existe un usuario con ese email' });
          }
        } catch (error) {
          console.log('Estoy en el catch');
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  public crearUser() {
    this.direccionService.saveDireccion(this.formuser.value).subscribe(
      res => {
        console.log(res);
        this.idDir = res.idInsert;
        this.formuser.get('direccion').setValue(this.idDir);
        console.log(this.idDir);
      },
      err => {
        console.log(err);
      }
    );

    setTimeout(() => {
      console.log('Stop');
      console.log(this.formuser.value);
      this.usuarioService.saveUsuario(this.formuser.value).subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/login']);
        },
        err => {
          console.log(err);
        }
      );
    }, 2000);
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

  get nombre_dir() {
    return this.formuser.get('nombre_dir');
  }

  get numero() {
    return this.formuser.get('numero');
  }

  get piso() {
    return this.formuser.get('piso');
  }

  get provincia() {
    return this.formuser.get('provincia');
  }

  get poblacion() {
    return this.formuser.get('poblacion');
  }

  get numeroPiso() {
    return this.formuser.get('numeroPiso');
  }
  get cp() {
    return this.formuser.get('cp');
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

  public onOptionsSelected2(value: number) {
    this.poblacionService.getPoblacion(value).subscribe(
      res => {
        console.log(res);
        this.pobl = res;
      },
      err => {
        console.log(err);
      }
    );
  }
}

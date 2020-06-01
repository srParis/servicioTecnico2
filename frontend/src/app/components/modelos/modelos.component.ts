import { Component, OnInit } from '@angular/core';
import { MarcaService } from 'src/app/services/marcas.service';
import { ModeloService } from 'src/app/services/modelo.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Modelo, Marca } from 'src/app/modelos/modelos';
import { literal } from 'src/app/utilidades/es-Es';


@Component({
  selector: 'app-modelos',
  templateUrl: './modelos.component.html',
  styleUrls: ['./modelos.component.scss']
})
export class ModelosComponent implements OnInit {
  public formmodelo: FormGroup;
  public filtrarM: FormGroup;
  public modelos: Modelo;
  public marcas: Marca;
  public marcaF: Marca;
  private existe: number;

  constructor(public formBuilder: FormBuilder, public modeloService: ModeloService, public marcasService: MarcaService) {
    this.formmodelo = formBuilder.group({
      nombre: [],
      modelo: [],
      id_marca: []

    }),
      this.filtrarM = formBuilder.group({
        id_marca2: []
      });
  }

  ngOnInit() {
    this.marcasService.getMarcas().subscribe(
      res => {
        console.log(res);
        this.marcas = res;
      },
      err => {
        console.log(err);
      }
    );

    this.modeloService.getModelos().subscribe(
      res => {
        console.log(res);
        this.modelos = res;
      },
      err => {
        console.log(err);
      }
    );
  }


  submit() {
    this.modeloService.leer(this.formmodelo.value).subscribe(
      res => {
        this.existe = res.length;

      },
      err => {
        console.log(err);
      }
    );
    setTimeout(() => {
      if (this.existe === 0) {
        this.modeloService.saveModelo(this.formmodelo.value).subscribe(
          res => {
            console.log(res);
            this.formmodelo.setErrors({ login: literal.notify.notifyModel });
            this.ngOnInit();
          },
          err => {
            console.log(err);
          }
        );
      } else {
        this.formmodelo.setErrors({ login: literal.error.errorNuevoModelo });
      }
    }, 100);
  }

  submit2() {
    const valorMarca = this.filtrarM.value;
    this.modeloService.getMarcas(valorMarca.id_marca2).subscribe(
      res => {
        this.modelos = null;
        this.modelos = res;
        console.log(this.modelos);
        if (res.length === 0) {

          this.filtrarM.setErrors({ login: literal.error.errorFiltrar });
        }
      },
      err => {
        console.log(err);
      }
    );

  }

  get nombre() {
    return this.formmodelo.get('nombre');
  }

  get modelo() {
    return this.formmodelo.get('modelo');
  }
  get id_marca() {
    return this.formmodelo.get('id_marca');
  }
  get seleccionado() {
    return this.formmodelo.get('seleccionado');
  }
  get seleccionado2() {
    return this.formmodelo.get('seleccionado2');
  }



}

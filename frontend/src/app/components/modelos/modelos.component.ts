import { Component, OnInit } from '@angular/core';
import { MarcaService } from 'src/app/services/marcas.service';
import { ModeloService } from 'src/app/services/modelo.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Modelo, Marca } from 'src/app/modelos/modelos';


@Component({
  selector: 'app-modelos',
  templateUrl: './modelos.component.html',
  styleUrls: ['./modelos.component.scss']
})
export class ModelosComponent implements OnInit {
  private formmodelo: FormGroup;
  private filtrarM: FormGroup;
  public modelos: Modelo;
  public marcas: Marca;
  public idMarcas: Marca;

  constructor(private formBuilder: FormBuilder, private modeloService: ModeloService, private marcasService: MarcaService) {
    this.formmodelo = formBuilder.group({
      nombre: [],
      modelo: [],
      id_marca: []
    }),
      this.filtrarM = formBuilder.group({
        nombre: []
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

    const modelo = this.formmodelo.value;
    if (this.modeloService.getModelos()) {

      this.modeloService.saveModelo(modelo).subscribe(
        res => {
          console.log(res);
          this.ngOnInit();
        },
        err => {
          console.log(err);
        }
      );
    } else {
      console.log('Ya existe');
    }
  }
  submit2() {
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



}

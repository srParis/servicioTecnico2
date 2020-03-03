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
  public modelos: Modelo;
  public marcas: Marca;
  public idMarcas: Marca;

  constructor(private formBuilder: FormBuilder, private modeloService: ModeloService, private marcasService: MarcaService) {
    this.formmodelo = formBuilder.group({
      nombre: [],
      modelo: [],
      id_marca: []
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
}



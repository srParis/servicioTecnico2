import { Component, OnInit } from '@angular/core';
import { MarcaService } from 'src/app/services/marcas.service';
import { ModeloService } from 'src/app/services/modelo.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Modelo } from 'src/app/modelos/modelos';

@Component({
  selector: 'app-modelos',
  templateUrl: './modelos.component.html',
  styleUrls: ['./modelos.component.scss']
})
export class ModelosComponent implements OnInit {
  private formmarc: FormGroup;
  public modelos: Modelo;


  constructor(private formBuilder: FormBuilder, private modeloService: ModeloService) { }

  ngOnInit() {
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



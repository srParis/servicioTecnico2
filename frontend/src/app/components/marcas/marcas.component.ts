import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Marca } from 'src/app/modelos/modelos';
import { MarcaService } from 'src/app/services/marcas.service';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.scss']
})
export class MarcasComponent implements OnInit {
  private formmarc: FormGroup;
  public marcas: Marca;

  constructor(private formBuilder: FormBuilder, private marcaService: MarcaService ) {
    this.formmarc = formBuilder.group({
      nombre: [],
    });

  }

  ngOnInit() {
        this.marcaService.getMarcas().subscribe(
      res => {
        console.log(res);
        this.marcas = res;
      },
      err => {
        console.log(err);
      }
    );
  }
/*
    submit() {
    this.marcaService.saveMarca(this.formmarc.value).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
  */

}

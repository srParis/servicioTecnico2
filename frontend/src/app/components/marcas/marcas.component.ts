import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Marca } from 'src/app/modelos/modelos';
import { MarcaService } from 'src/app/services/marcas.service';
import { literal } from 'src/app/utilidades/es-Es';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.scss']
})
export class MarcasComponent implements OnInit {
  private formmarc: FormGroup;
  private filtrarMarc: FormGroup;
  public marcas: Marca;
  public nombreMarca: Marca;
  constructor(private formBuilder: FormBuilder, private marcaService: MarcaService) {
    this.formmarc = formBuilder.group({
      nombre: [],
    }),
      this.filtrarMarc = formBuilder.group({
        marca: []
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

  submit() {

    const marc = this.formmarc.value;
    if (!this.marcaService.getMarca(marc)) {
      console.log('no exite');
      this.marcaService.saveMarca(marc).subscribe(
        res => {
          console.log(res);
          this.ngOnInit();
        },
        err => {
          console.log(err);
        }
      );
    } else {
      this.formmarc.setErrors({ login: literal.error.errorMarca });
    }

  }
  filter() {


    this.marcaService.filterMarca(this.filtrarMarc.value).subscribe(
      res => {
        console.log(res);
        this.marcas = res;
        if (res.length === 0) {

          this.filtrarMarc.setErrors({ login: literal.error.errorFiltrar });
        }
      },
      err => {
        console.log(err);
      }
    );

  }
}

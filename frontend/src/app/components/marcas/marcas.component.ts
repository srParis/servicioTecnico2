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
  public formmarc: FormGroup;
  public filtrarMarc: FormGroup;
  public marcas: Marca;
  public nombreMarca: Marca;
  private existe: number;
  constructor(public formBuilder: FormBuilder, public marcaService: MarcaService) {
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

  enviar() {
    this.marcaService.leer(this.formmarc.value).subscribe(
      res => {
        // console.log(res);
        this.existe = res.length;
        // console.log(this.existe);

      },
      err => {
        console.log(err);
      }
    );
    setTimeout(() => {
      if (this.existe === 0) {
        this.marcaService.saveMarca(this.formmarc.value).subscribe(
          res => {
            console.log(res);
            this.formmarc.setErrors({login: literal.notify.notifyMarca});
            this.ngOnInit();
          },
          err => {
            console.log(err);
          }
        );
      } else {
        this.formmarc.setErrors({ login: literal.error.errorNuevaMarca });
      }
    }, 100);
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

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
    if (this.marcaService.getMarca(marc)) {

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
      console.log('Ya existe');
    }

  }
  filter() {

    console.log(this.filtrarMarc.value);
    this.marcaService.filterMarca(this.filtrarMarc.value).subscribe(
      res => {
        console.log(res);
        this.marcas = res;
      },
      err => {
        console.log(err);
      }
    );

  }
}

import { Component, OnInit } from '@angular/core';
import { TipoReparacion } from 'src/app/modelos/modelos';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TipoReparacionService } from 'src/app/services/tipos-reparacion.service';
import { literal } from 'src/app/utilidades/es-Es';

@Component({
  selector: 'app-reparaciones',
  templateUrl: './reparaciones.component.html',
  styleUrls: ['./reparaciones.component.scss']
})
export class ReparacionesComponent implements OnInit {
  private formRep: FormGroup;
  private filtrarRep: FormGroup;
  public tipoReparacion: TipoReparacion;
  public tipo: TipoReparacion;
  constructor(private formBuilder: FormBuilder, private tipoReparacionService: TipoReparacionService,
    ) {
      this.formRep = formBuilder.group({
        nombre: [],
        precio: []
      }),
      this.filtrarRep = formBuilder.group({
        nombre: [],
      });
     }
     private nombre;
  ngOnInit() {
    this.tipoReparacionService.getTipoReparaciones().subscribe(
      res => {
        console.log(res);
        this.tipoReparacion = res;
      },
      err => {
        console.log(err);
      }
    );
  }
  submit2() {



    this.tipoReparacionService.filterTipoReparacion(this.filtrarRep.value).subscribe(
      res => {
        console.log(res);
        this.tipoReparacion = res;
        if ( res.length === 0) {

            this.filtrarRep.setErrors({login: literal.error.errorFiltrar });
        }
      },
      err => {
        console.log(err);
      }
    );

  }

}

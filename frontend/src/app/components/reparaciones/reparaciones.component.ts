import { Component, OnInit } from '@angular/core';
import { TipoReparacion } from 'src/app/modelos/modelos';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TipoReparacionService } from 'src/app/services/tipos-reparacion.service';

@Component({
  selector: 'app-reparaciones',
  templateUrl: './reparaciones.component.html',
  styleUrls: ['./reparaciones.component.scss']
})
export class ReparacionesComponent implements OnInit {
  //private formmarc: FormGroup;
  public tipoReparacion: TipoReparacion;
  constructor(private formBuilder: FormBuilder, private tipoReparacionService: TipoReparacionService) { }

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

}

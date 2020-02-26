import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-barranavegacion',
  templateUrl: './barranavegacion.component.html',
  styleUrls: ['./barranavegacion.component.scss']
})
export class BarranavegacionComponent implements OnInit {

  constructor(public usuarioservice: UsuarioService) { }

  ngOnInit() {
  }

}

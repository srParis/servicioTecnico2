import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-barranavegacion-admin',
  templateUrl: './barranavegacion-admin.component.html',
  styleUrls: ['./barranavegacion-admin.component.scss']
})
export class BarranavegacionAdminComponent implements OnInit {

  constructor(public usuarioservice: UsuarioService) { }

  ngOnInit() {
  }

}

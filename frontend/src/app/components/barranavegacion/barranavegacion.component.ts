import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

import { AuthService } from 'angularx-social-login';

@Component({
  selector: 'app-barranavegacion',
  templateUrl: './barranavegacion.component.html',
  styleUrls: ['./barranavegacion.component.scss']
})
export class BarranavegacionComponent implements OnInit {

  constructor(public usuarioservice: UsuarioService, private authService: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this.usuarioservice.logOut();
    this.authService.signOut();
  }

}

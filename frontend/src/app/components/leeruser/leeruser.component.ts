import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/modelos/modelos';

@Component({
  selector: 'app-leeruser',
  templateUrl: './leeruser.component.html',
  styleUrls: ['./leeruser.component.scss']
})
export class LeeruserComponent implements OnInit {

  public usuarios: Usuario;
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioService.getUsuarios().subscribe(
      res => {
        console.log(res);
        this.usuarios = res;
      },
      err => {
        console.log(err);
      }
    );
  }
}

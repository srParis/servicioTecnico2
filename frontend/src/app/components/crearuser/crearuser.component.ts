import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Usuario } from 'src/app/modelos/modelos';

@Component({
  selector: 'app-crearuser',
  templateUrl: './crearuser.component.html',
  styleUrls: ['./crearuser.component.scss']
})
export class CrearuserComponent implements OnInit {

  private formuser: FormGroup;
  public usuarios: Usuario;

  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService) {
    this.formuser = formBuilder.group({
      nombre: [],
      imagen: []
    });
   }

  ngOnInit() {}

  submit() {
    this.usuarioService.saveUsuario(this.formuser.value).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

}

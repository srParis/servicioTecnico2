import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class CompruebatokenService implements HttpInterceptor {

  constructor(private usuarioservice: UsuarioService) { }

  intercept(req: any, next: any) {
    if (this.usuarioservice.getToken() === null) {
      const token = req.clone({
        setHeaders: {
          Authorization: 'miaplicacion' + this.usuarioservice.getTokenAd()
        }
      });
      return next.handle(token);
    } else {
      const token = req.clone({
        setHeaders: {
          Authorization: 'miaplicacion' + this.usuarioservice.getToken()
        }
      });
      return next.handle(token);
    }
  }
}

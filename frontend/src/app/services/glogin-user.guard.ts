import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class GLoginUserGuard implements CanActivate {
  constructor(private miservicio: UsuarioService, private router: Router) {}

  canActivate(): boolean {
    if (this.miservicio.logIn()) {
      // this.router.navigate(['login']);
      return true;
    }

    if (this.miservicio.logInAd()) {
      // this.router.navigate(['login']);
      return true;
    }

    this.router.navigate(['login']);
    return false;
  }
}

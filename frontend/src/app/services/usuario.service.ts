import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../modelos/modelos';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<any> {
    return this.http.get('http://localhost:3000/usuarios');
  }

  getUsuario(usuario: Usuario) {
    const id = usuario.id;
    return this.http.get('http:/localhost:3000/usuarios/' + id );
  }

  saveUsuario(usuario: Usuario): Observable<any> {
    console.log(usuario);
    return this.http.post('http://localhost:3000/usuarios', usuario);
  }

  deleteUsuario() {

  }

  updateUsuario() {

  }

  getLogin(usuario: Usuario): Observable<any> {
    return this.http.post('http://localhost:3000/usuarios/login', usuario);
  }

  logIn() {
    return !!localStorage.getItem('token');
  }

  logInAd() {
    return !!localStorage.getItem('token_admin');
  }

  logOut() {
    localStorage.removeItem('token');
  }

  logOutAd() {
    localStorage.removeItem('token_admin');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getTokenAd() {
    return localStorage.getItem('token_admin');
  }
}

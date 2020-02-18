import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Direccion } from '../modelos/modelos';
@Injectable({
  providedIn: 'root'
})
export class DireccionService {

  constructor(private http: HttpClient) { }

  getDirecciones(): Observable<any> {
    return this.http.get('http://localhost:3000/usuarios');
  }

  getDireccion() {

  }

  saveDireccion( direccion: Direccion): Observable<any> {
    console.log(direccion);
    return this.http.post('http://localhost:3000/Direccions', direccion);
  }

  deleteDireccion() {

  }

  updateDireccion() {

  }
}

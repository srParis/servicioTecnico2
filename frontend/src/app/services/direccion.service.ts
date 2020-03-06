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
    return this.http.get('http://localhost:3000/direcciones');
  }

  getDireccion(direccion: Direccion) {
    const id = direccion.id;
    return this.http.get('http://localhost:3000/direcciones/' + id);
  }

  getDireccionByNom(direccion: Direccion) {
    return this.http.post('http://localhost:3000/direcciones/dir1/', direccion);
  }

  saveDireccion( direccion: Direccion): Observable<any> {
    console.log(direccion);
    return this.http.post('http://localhost:3000/direcciones', direccion);
  }

  deleteDireccion() {
    return this.http.delete('http://localhost:3000/:');
  }

  updateDireccion(direccion: Direccion) {
    return this.http.put('http://localhost:3000/direcciones/', direccion);
  }
}

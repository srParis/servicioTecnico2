import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoReparacion } from '../modelos/modelos';
@Injectable({
  providedIn: 'root'
})
export class TipoReparacionService {

  constructor(private http: HttpClient) { }

  getTipoReparaciones(): Observable<any> {
    return this.http.get('http://localhost:3000/tipoReparacion');
  }

  getTipoReparacion(id: number) {
    return this.http.get('http://localhost:3000/tipoReparacion' + id);
  }

  saveTipoReparacion(tipoReparacion: TipoReparacion): Observable<any> {
    console.log(tipoReparacion);
    return this.http.post('http://localhost:3000/tipoReparacion', tipoReparacion);
  }

  deleteTipoReparacion() {

  }

  updateTipoReparacion() {

  }

  filterTipoReparacion(tipoReparacion: TipoReparacion): Observable<any> {
    console.log(tipoReparacion);
    // marca = '%' + marca + '%';
    return this.http.post('http://localhost:3000/tipoReparacion/filter', tipoReparacion);
  }
}


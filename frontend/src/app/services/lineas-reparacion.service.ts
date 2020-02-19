import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LineaReparacion } from '../modelos/modelos';
@Injectable({
  providedIn: 'root'
})
export class LineaReparacionService {

  constructor(private http: HttpClient) { }

  getLineaReparaciones(): Observable<any> {
    return this.http.get('http://localhost:3000/lineas_reparacion');
  }

  getLineaReparacion() {

  }

  saveLineaReparacion(lineaReparacion: LineaReparacion): Observable<any> {
    console.log(lineaReparacion);
    return this.http.post('http://localhost:3000/lineas_reparacion', lineaReparacion);
  }

  deleteLineaReparacion() {

  }

  updateLineaReparacion() {

  }
}

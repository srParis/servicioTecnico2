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
    return this.http.get('http://localhost:3000/lineasReparacion');
  }

  getLineaReparacion(id: number) {
    return this.http.get('http://localhost:3000/lineasReparacion/' + id);
  }

  saveLineaReparacion(lineaReparacion: LineaReparacion): Observable<any> {
    console.log(lineaReparacion);
    return this.http.post('http://localhost:3000/lineasReparacion', lineaReparacion);
  }

  deleteLineaReparacion() {

  }

  updateLineaReparacion() {

  }
}

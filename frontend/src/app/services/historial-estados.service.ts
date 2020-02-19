import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HistorialEstados } from '../modelos/modelos';
@Injectable({
  providedIn: 'root'
})
export class HistorialEstadoService {

  constructor(private http: HttpClient) { }

  getHistorialEstados(): Observable<any> {
    return this.http.get('http://localhost:3000/historial_estados');
  }

  getHistorialEstado() {

  }

  saveHistorialEstado(historialEstado: HistorialEstados): Observable<any> {
    console.log(historialEstado);
    return this.http.post('http://localhost:3000/historial_estados', historialEstado);
  }

  deleteHistorialEstado() {

  }

  updateHistorialEstado() {

  }
}

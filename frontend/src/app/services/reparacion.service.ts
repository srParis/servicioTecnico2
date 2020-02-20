import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reparaciones } from '../modelos/modelos';
@Injectable({
  providedIn: 'root'
})
export class ReparacionService {

  constructor(private http: HttpClient) { }

  getReparaciones(): Observable<any> {
    return this.http.get('http://localhost:3000/reparaciones');
  }

  getReparacion(id: number) {
    return this.http.get('http://localhost:3000/reparaciones/' + id);
  }

  saveReparacion(reparacion: Reparaciones): Observable<any> {
    console.log(reparacion);
    return this.http.post('http://localhost:3000/reparacion', reparacion);
  }

  deleteReparacion() {

  }

  updateReparacion() {

  }
}

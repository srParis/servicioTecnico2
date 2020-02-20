import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Puesto } from '../modelos/modelos';
@Injectable({
  providedIn: 'root'
})
export class PuestoService {

  constructor(private http: HttpClient) { }

  getPuestos(): Observable<any> {
    return this.http.get('http://localhost:3000/puestos');
  }

  getPuesto(id: number) {
    return this.http.get('http://localhost:3000/puestos' + id);
  }

  savePuesto(puesto: Puesto): Observable<any> {
    console.log(puesto);
    return this.http.post('http://localhost:3000/puestos', puesto);
  }

  deletePuesto() {

  }

  updatePuesto() {

  }
}

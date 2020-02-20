import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Poblacion, Provincia } from '../modelos/modelos';
@Injectable({
  providedIn: 'root'
})
export class PoblacionService {

  constructor(private http: HttpClient) { }

  getPoblaciones(): Observable<any> {
    return this.http.get('http://localhost:3000/poblaciones');
  }

  getPoblacion(id: number) {
    return this.http.get('http://localhost:3000/poblaciones/' + id);
  }

  savePoblacion(poblacion: Poblacion): Observable<any> {
    console.log(poblacion);
    return this.http.post('http://localhost:3000/poblaciones', poblacion);
  }

  deletePoblacion() {

  }

  updatePoblacion() {

  }
  getPpb(provincia: Provincia) {
    const id = provincia.id;
    return this.http.get('http://localhost:3000/provincias/poblaciones/' + id);
  }
}

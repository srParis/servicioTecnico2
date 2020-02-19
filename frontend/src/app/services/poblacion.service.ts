import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Poblacion } from '../modelos/modelos';
@Injectable({
  providedIn: 'root'
})
export class PoblacionService {

  constructor(private http: HttpClient) { }

  getPoblaciones(): Observable<any> {
    return this.http.get('http://localhost:3000/poblaciones');
  }

  getPoblacion() {

  }

  savePoblacion(poblacion: Poblacion): Observable<any> {
    console.log(poblacion);
    return this.http.post('http://localhost:3000/poblaciones', poblacion);
  }

  deletePoblacion() {

  }

  updatePoblacion() {

  }
}

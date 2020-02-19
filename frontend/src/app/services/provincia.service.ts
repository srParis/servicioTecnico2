import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Provincia } from '../modelos/modelos';
@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {

  constructor(private http: HttpClient) { }

  getProvincias(): Observable<any> {
    return this.http.get('http://localhost:3000/provincias');
  }

  getProvincia() {

  }

  saveProvincia(provincia: Provincia): Observable<any> {
    console.log(provincia);
    return this.http.post('http://localhost:3000/provincias', provincia);
  }

  deleteProvincia() {

  }

  updateProvincia() {

  }
}

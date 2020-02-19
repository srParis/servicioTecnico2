import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trabajadores } from '../modelos/modelos';
@Injectable({
  providedIn: 'root'
})
export class TrabajadoresService {

  constructor(private http: HttpClient) { }

  getTrabajadores(): Observable<any> {
    return this.http.get('http://localhost:3000/trabajadores');
  }

  getTrabajador() {

  }

  saveTrabajador(trabajadores: Trabajadores): Observable<any> {
    console.log(trabajadores);
    return this.http.post('http://localhost:3000/trabajadores', trabajadores);
  }

  deleteTrabajador() {

  }

  updateTrabajador() {

  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Modelo } from '../modelos/modelos';
@Injectable({
  providedIn: 'root'
})
export class ModeloService {

  constructor(private http: HttpClient) { }

  getModelos(): Observable<any> {
    return this.http.get('http://localhost:3000/modelos');
  }

  getModelo(id: number) {
    return this.http.get('http://localhost:3000/modelos' + id);
  }

  saveModelo(modelo: Modelo): Observable<any> {
    console.log(modelo);
    return this.http.post('http://localhost:3000/modelos', modelo);
  }

  deleteModelo() {

  }

  updateModelo() {

  }
}

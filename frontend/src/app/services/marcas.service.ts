import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Marca } from '../modelos/modelos';
@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  constructor(private http: HttpClient) { }

  getMarcas(): Observable<any> {
    return this.http.get('http://localhost:3000/marcas');
  }

  getMarca() {

  }

  saveMarca(marca: Marca): Observable<any> {
    console.log(marca);
    return this.http.post('http://localhost:3000/marcas', marca);
  }

  deleteMarca() {

  }

  updateMarca() {

  }
}

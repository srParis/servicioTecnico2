import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LineaFactura } from '../modelos/modelos';
@Injectable({
  providedIn: 'root'
})
export class LineasFacturaService {

  constructor(private http: HttpClient) { }

  getLineasFacturas(): Observable<any> {
    return this.http.get('http://localhost:3000/lineasFactura');
  }

  getLineasFactura(id: number) {
    return this.http.get('http://localhost:3000/lineasFactura' + id);
  }

  saveLineasFactura(lineaFactura: LineaFactura): Observable<any> {
    console.log(lineaFactura);
    return this.http.post('http://localhost:3000/lineasFactura', lineaFactura);
  }

  deleteLineasFactura() {

  }

  updateLineaFactura() {

  }
}

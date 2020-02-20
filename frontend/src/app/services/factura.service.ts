import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Factura } from '../modelos/modelos';
@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  constructor(private http: HttpClient) { }

  getFacturas(): Observable<any> {
    return this.http.get('http://localhost:3000/facturas');
  }

  getFactura(id: number) {
    return this.http.get('http://localhost:3000/facturas/' + id);
  }

  saveFactura(factura: Factura): Observable<any> {
    console.log(factura);
    return this.http.post('http://localhost:3000/facturas', factura);
  }

  deleteFactura() {

  }

  updateFactura() {

  }
}

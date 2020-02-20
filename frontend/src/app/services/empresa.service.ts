import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empresa } from '../modelos/modelos';
@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(private http: HttpClient) { }

  getEmpresas(): Observable<any> {
    return this.http.get('http://localhost:3000/empresas');
  }

  getEmpresa(id: number) {
    return this.http.get('http://localhost:3000/empresas/' + id);
  }

  saveEmpresa(empresa: Empresa): Observable<any> {
    console.log(empresa);
    return this.http.post('http://localhost:3000/empresas', empresa);
  }

  deleteEmpresa() {

  }

  updateEmpresa() {

  }
}

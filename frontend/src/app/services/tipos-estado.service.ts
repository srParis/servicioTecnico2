import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoEstado} from '../modelos/modelos';
@Injectable({
  providedIn: 'root'
})
export class TipoEstadoService {

  constructor(private http: HttpClient) { }

  getTipoEstados(): Observable<any> {
    return this.http.get('http://localhost:3000/tipo_estado');
  }

  getTipoEstado() {

  }

  saveTipoEstado(tipoEstado: TipoEstado): Observable<any> {
    console.log(tipoEstado);
    return this.http.post('http://localhost:3000/tipo_estado', tipoEstado);
  }

  deleteTipoEstado() {

  }

  updateTipoEstado() {

  }
}

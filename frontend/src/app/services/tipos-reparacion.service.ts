import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoReparacion} from '../modelos/modelos';
@Injectable({
  providedIn: 'root'
})
export class TipoReparacionService {

  constructor(private http: HttpClient) { }

  getTipoReparaciones(): Observable<any> {
    return this.http.get('http://localhost:3000/tipo_reparacion');
  }

  getTipoReparacion(id: number) {
    return this.http.get('http://localhost:3000/tipo_reparacion' + id);
  }

  saveTipoReparacion(tipoReparacion: TipoReparacion): Observable<any> {
    console.log(tipoReparacion);
    return this.http.post('http://localhost:3000/tipo_reparacion', tipoReparacion);
  }

  deleteTipoReparacion() {

  }

  updateTipoReparacion() {

  }
}

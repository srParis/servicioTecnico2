import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dispositivo } from '../modelos/modelos';
@Injectable({
  providedIn: 'root'
})
export class DispositivoService {

  constructor(private http: HttpClient) { }

  getDispositivos(): Observable<any> {
    return this.http.get('http://localhost:3000/dispositivos');
  }

  getDispositivo(id: number) {
    return this.http.get('http:/localhost:3000/dispositivos/' + id);
  }

  saveUsuario( dispositivo: Dispositivo): Observable<any> {
    console.log(dispositivo);
    return this.http.post('http://localhost:3000/Dispositivos', dispositivo);
  }

  deleteDispositivo() {

  }

  updateDispositivo() {

  }
}

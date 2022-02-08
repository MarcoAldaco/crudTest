import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor( private http: HttpClient ) {}

  getMontos() {
    return this.http.get(`${ URL }?opc=0`);
  }

  getPrestamos() {
    return this.http.get(`${ URL }?opc=1`);
  }
  
  getPrestamoCliente( nombre: string ) {
    return this.http.get(`${ URL }?opc=2&nombre=${ nombre }`);
  }
  
  insertPrestamo( nombre: string, apellido: string, monto: number, plazo: number ) {
    return this.http.get(
      `${ URL }?opc=3&nombre=${ nombre }&apellido=${ apellido }&monto=${ monto }&plazo=${ plazo }`
    );
  }

  getAmortizacion( monto: number, plazo: number ) {
    return this.http.get(
      `${ URL }?opc=4&monto=${ monto }&plazo=${ plazo }`
    );
  }

}

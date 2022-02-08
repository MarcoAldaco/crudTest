import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-agregar-prestamos',
  templateUrl: './agregar-prestamos.component.html',
  styleUrls: ['./agregar-prestamos.component.css']
})
export class AgregarPrestamosComponent implements OnInit {

  nombre: string = '';
  apellido: string = '';
  montos: any[] = [];
  plazo: string = '';
  monto: string = '';

  constructor( private router: Router,
               private crudsrv: CrudService ) {}

  ngOnInit(): void {
    this.crudsrv.getMontos()
      .subscribe( (res: any) => {
        this.montos = res.data.response;
      });
  }

  regresa() {
    this.router.navigateByUrl('/home');
  }

  guardar() {
    console.log('nombre:', this.nombre);
    console.log('apellido:', this.apellido);
    console.log('monto:', this.monto);
    console.log('plazo:', this.plazo);

    let nom: boolean, ap: boolean, mon: boolean, pla: boolean;

    pla = this.validaCampo(this.plazo, 'p');
    mon = this.validaCampo(this.monto, 'm');
    ap = this.validaCampo(this.apellido, 'a');
    nom = this.validaCampo(this.nombre, 'n');

    if ( nom && ap && mon && pla ) {
      this.crudsrv.insertPrestamo( this.nombre, this.apellido, Number(this.monto), Number(this.plazo) )
        .subscribe( (res: any) => {
          console.log( res );

          const DATA = res.data;

          if ( DATA.count === 1 ) {
            Swal.fire({
              icon: 'success',
              title: '',
              text: DATA.response.mensaje,
              allowOutsideClick: false
            }).then(() => {
              setTimeout(() => {
                this.regresa();
              }, 300);
            });
          } else {
            Swal.fire({
              icon: 'error',
              title: '',
              text: DATA.response.mensaje,
              allowOutsideClick: false
            });
          }
        });
    }
  }

  validaCampo( val: any, t: string ): boolean {
    let res = true;

    if ( val === '' ) {
      res = false;
      let mensaje: string = '';

      switch (t) {
        case 'n':
          mensaje = 'El Nombre es obligatorio, favor de escribirlo';
          break;
        case 'a':
          mensaje = 'El Apellido es obligatorio, favor de escribirlo';
          break;
        case 'm':
          mensaje = 'El Monto es obligatorio, favor de seleccionar un monto';
          break;
        case 'p':
          mensaje = 'El Plazo es obligatorio, favor de seleccionar un plazo';
          break;
      
        default:
          break;
      }

      Swal.fire({
        icon: 'info',
        title: '',
        text: mensaje,
        allowOutsideClick: false
      });
    }

    return res;
  }

}

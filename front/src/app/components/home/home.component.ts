import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';
import { Spinkit } from 'ng-http-loader';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('inputCliente') inputCliente!: ElementRef;

  spinnerStyle = Spinkit;
  prestamos: any[] = [];
  cliente: string = '';

  constructor( private crudsrv: CrudService,
               private router: Router ) {}

  ngOnInit(): void {
    this.crudsrv.getPrestamos()
      .subscribe( (res: any) => {
        this.prestamos = res.data.response;
      });
  }

  buscarCliente() {
    this.crudsrv.getPrestamoCliente( this.cliente )
      .subscribe( (res: any) => {
        this.prestamos = res.data.response;
      });
  }

  prestamo() {
    this.router.navigateByUrl('/agregar-prestamo');
  }

  amortizacion( nombre: string, monto: string, plazos: string ) {
    this.router.navigate( ['/amortizacion', nombre, monto, plazos] );
  }

  inCliente(event: any) {
    if (event.keyCode == 13) {
      event.preventDefault();
      
      this.buscarCliente();
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from '../../services/crud.service';
import { Spinkit } from 'ng-http-loader';

@Component({
  selector: 'app-amortizacion',
  templateUrl: './amortizacion.component.html',
  styleUrls: ['./amortizacion.component.css']
})
export class AmortizacionComponent implements OnInit {

  spinnerStyle = Spinkit;
  pagos: any[] = [];
  nombre: string = '';
  monto: string = '';
  plazos: string = '';

  constructor( private router: Router,
               private crudsrv: CrudService,
               private activatedRoute: ActivatedRoute ) {
    this.activatedRoute.params.subscribe(
      params => {
        this.nombre = params['nombre'];
        this.monto = params['monto'];
        this.plazos = params['plazos'];
      }
    );
  }

  ngOnInit(): void {
    this.crudsrv.getAmortizacion( Number(this.monto), Number(this.plazos))
      .subscribe( (res: any) => {
        this.pagos = res.response;
      });
  }

  regresa() {
    this.router.navigateByUrl('/home');
  }

}

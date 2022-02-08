import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarPrestamosComponent } from './components/agregar-prestamos/agregar-prestamos.component';
import { AmortizacionComponent } from './components/amortizacion/amortizacion.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'agregar-prestamo', component: AgregarPrestamosComponent },
  { path: 'amortizacion/:nombre/:monto/:plazos', component: AmortizacionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

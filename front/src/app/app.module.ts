import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgHttpLoaderModule } from 'ng-http-loader';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AgregarPrestamosComponent } from './components/agregar-prestamos/agregar-prestamos.component';
import { AmortizacionComponent } from './components/amortizacion/amortizacion.component';

import { SoloNumerosDirective } from './directives/solo-numeros.directive';
import { SoloLetrasDirective } from './directives/solo-letras.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AgregarPrestamosComponent,
    AmortizacionComponent,
    SoloNumerosDirective,
    SoloLetrasDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgHttpLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'input[solo-numeros]'
})
export class SoloNumerosDirective {

  constructor( private _el: ElementRef ) {}

  @HostListener('input', ['$event']) onInputChange( event: any ) {
    const valorInicial: string = this._el.nativeElement.value;

    this._el.nativeElement.value = valorInicial.replace(/[^0-9]*/g, '');

    if ( valorInicial !== this._el.nativeElement.value ) {
      event.stopPropagation();
    }
  }

}

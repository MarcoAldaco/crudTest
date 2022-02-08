import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'input[solo-letras]'
})
export class SoloLetrasDirective {

  constructor( private _el: ElementRef ) {}

  @HostListener('input', ['$event']) onInputChange( event: any ) {
    const valorInicial: string = this._el.nativeElement.value;

    this._el.nativeElement.value = valorInicial.replace(/\s+/g, ' ').replace(/[^a-zA-ZñÑ\s]*/g, '');

    if ( valorInicial !== this._el.nativeElement.value ) {
      event.stopPropagation();
    }
  }

}

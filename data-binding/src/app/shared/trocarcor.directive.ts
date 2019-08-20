import { Directive, HostBinding , HostListener , ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[trocarcor]'
})
export class TrocarcorDirective {
  @HostBinding('style.color') acor:string ;

  @HostListener('mouseenter') leo(){
    this.acor = 'red';
  }
  @HostListener('mouseleave') nardo(){
    this.acor = 'blue';
  }

  constructor() { }

}

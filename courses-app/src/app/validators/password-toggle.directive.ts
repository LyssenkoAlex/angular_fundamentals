import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appPasswordToggle]'
})
export class PasswordToggleDirective {

  constructor(private el: ElementRef) { }

}

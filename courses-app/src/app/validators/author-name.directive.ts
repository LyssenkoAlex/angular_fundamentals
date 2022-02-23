import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from "@angular/forms";

@Directive({
  selector: '[appAuthorName]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: AuthorNameDirective,
    multi: true
  }]
})
export class AuthorNameDirective implements Validator{

  constructor() { }

  validate(control: AbstractControl) : {[key: string]: any} | null {
    const validateAuthorName = String(control.value)
      .toLowerCase()
      .match(
        /^[a-zA-Z0-9_.-]*$/
      );
    if (validateAuthorName === null) {
      return { 'authorNameInvalid': true };
    }
    return null;
  }

}

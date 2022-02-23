import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EmailValidatorDirective} from "./validators/email-validator.directive";
import {AuthorNameDirective} from "../validators/author-name.directive";



@NgModule({
  declarations: [
    EmailValidatorDirective,
    AuthorNameDirective
  ],
  imports: [
    CommonModule
  ],
})
export class SharedModule { }

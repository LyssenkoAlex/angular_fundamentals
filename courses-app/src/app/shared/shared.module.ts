import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegistrationComponent} from '../feature/registration/registration.component'

const COMPONENTS = [RegistrationComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule
  ],
  exports: [...COMPONENTS],
})
export class SharedModule { }

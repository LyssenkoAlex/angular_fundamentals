import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from '../feature/login/login.component'
import {RegistrationComponent} from '../feature/registration/registration.component'

const COMPONENTS = [LoginComponent, RegistrationComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule
  ],
  exports: [...COMPONENTS],
})
export class SharedModule { }

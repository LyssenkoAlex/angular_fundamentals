import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login.component";
import {SharedModule} from "../../shared/shared.module";
import {CommonModule} from "@angular/common";


const loginRoutes: Routes = [
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(loginRoutes)
  ]
})

export class LoginModule { }

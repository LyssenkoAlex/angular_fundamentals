import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthorsComponent} from "./authors.component";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: '', component: AuthorsComponent }
];

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthorsModule { }

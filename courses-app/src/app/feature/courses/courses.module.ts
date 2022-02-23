import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoursesComponent} from "./courses.component";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: '', component: CoursesComponent }
];

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CoursesModule { }

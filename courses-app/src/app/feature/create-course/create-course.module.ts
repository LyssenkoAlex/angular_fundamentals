import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateCourseComponent} from "./create-course.component";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule, Routes} from "@angular/router";

const registrationRoutes: Routes = [
  { path: '', component: CreateCourseComponent }
];

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(registrationRoutes)
  ]
})
export class CreateCourseModule { }

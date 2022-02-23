import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EditCourseComponent} from "./edit-course.component";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule, Routes} from "@angular/router";

const registrationRoutes: Routes = [
  { path: '', component: EditCourseComponent }
];

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(registrationRoutes)
  ]
})
export class EditCourseModule { }

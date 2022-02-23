import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CourseDetailsComponent} from "./course-details.component";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: '', component: CourseDetailsComponent }
];

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CourseDetailsModule { }

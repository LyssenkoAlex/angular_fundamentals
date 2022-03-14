import { Injectable } from '@angular/core';
import {Actions, ofType, createEffect} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import { of } from 'rxjs';
import {CoursesService} from "../../services/courses.service";
import {
  CoursesApiActionTypes, RequestAddCourseFail,
  RequestAddCourseSuccess,
  RequestCoursesFail,
  RequestCoursesSuccess
} from "./courses.action";
import {CourseModel} from "../../models/CourseModel";

@Injectable()
export class CoursesEffects {

  constructor(private actions$: Actions, private courseService: CoursesService) {
  }

  getCourses$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CoursesApiActionTypes.RequestCourses),
      switchMap((action) => this.courseService.getCourses().pipe(
          map((courses) => {
            console.log("courses Effect: ", courses);
            return new RequestCoursesSuccess(courses);
          }),
          catchError(error => of(new RequestCoursesFail(error)))
        )
      )
    );});

  addCourse$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CoursesApiActionTypes.RequestAddCourse),
      switchMap((action:any) => this.courseService.addCourseObj(action.payload).pipe(
          map((result:CourseModel) => {
            console.log("RequestAddCourse: ", result)
            return new RequestAddCourseSuccess(result);
          }),
          catchError(error => of(new RequestAddCourseFail(error)))
        )
      )
    );});



}

import { Injectable } from '@angular/core';
import {Actions, ofType, createEffect} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import { of } from 'rxjs';
import {CoursesService} from "../../services/courses.service";
import {
  CoursesApiActionTypes, RequestAddCourseFail,
  RequestAddCourseSuccess, RequestCourseByIdFail, RequestCourseByIdSuccess,
  RequestCoursesFail,
  RequestCoursesSuccess, RequestEditCourse, RequestEditCourseFail, RequestEditCourseSuccess
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
            console.log("addCourseObj Effect: ", result)
            return new RequestAddCourseSuccess(result);
          }),
          catchError(error => of(new RequestAddCourseFail(error)))
        )
      )
    );});

  getCourseById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CoursesApiActionTypes.RequestCourseById),
      switchMap((action:any) => this.courseService.getCourseObj(action.payload).pipe(
          map((courses) => {
            console.log("getCourseById$ Effect: ", courses.result);
            return new RequestCourseByIdSuccess(courses.result);
          }),
          catchError(error => of(new RequestCourseByIdFail(error)))
        )
      )
    );});

  editCourse$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CoursesApiActionTypes.RequestEditCourse),
      switchMap((action:any) => this.courseService.editCourseObj(action.payload.course, action.payload.id).pipe(
          map((courses) => {
            console.log("getCourseById$ Effect: ", courses.result);
            console.log("getCourseById$ Effect action.payload: ", action.payload);
            return new RequestEditCourseSuccess(courses.result);
          }),
          catchError(error => of(new RequestEditCourseFail(error)))
        )
      )
    );});

}

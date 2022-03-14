import {Action} from "@ngrx/store";
import {CoursesState} from "../../models/Course";
import {CourseModel} from "../../models/CourseModel";

export enum CoursesApiActionTypes {
  RequestCourses = 'RequestCourses',
  RequestCoursesSuccess = 'RequestCoursesSuccess',
  RequestCoursesFail = 'RequestCoursesFail',
  RequestAddCourse = 'RequestAddCourse',
  RequestAddCourseSuccess = 'RequestAddCourseSuccess',
  RequestAddCoursesFail = 'RequestAddCoursesFail',
  RequestAddCourseReSet = 'RequestAddCourseReSet'

}

export class RequestCourses implements Action {
  readonly type = CoursesApiActionTypes.RequestCourses
}

export class RequestCoursesSuccess implements Action {
  readonly type = CoursesApiActionTypes.RequestCoursesSuccess

  constructor(public payload: CoursesState) {
  }
}

export class RequestCoursesFail implements Action {
  readonly type = CoursesApiActionTypes.RequestCoursesFail

  constructor(public payload: any) {
  }
}

export class RequestAddCourse implements Action {
  constructor(public payload: CourseModel) {
  }
  readonly type = CoursesApiActionTypes.RequestAddCourse
}

export class RequestAddCourseSuccess implements Action {
  constructor(public payload: any) {}
  readonly type = CoursesApiActionTypes.RequestAddCourseSuccess
}

export class RequestAddCourseFail implements Action {
  constructor(public payload:any) {}
  readonly type = CoursesApiActionTypes.RequestAddCoursesFail
}

export class RequestAddCourseReSet implements Action {
  constructor() {}
  readonly type = CoursesApiActionTypes.RequestAddCourseReSet

}

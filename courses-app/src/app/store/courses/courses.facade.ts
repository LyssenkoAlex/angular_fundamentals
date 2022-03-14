import {Injectable} from "@angular/core";
import {Store} from '@ngrx/store'
import {Observable} from "rxjs";
import {courseQuery} from "./courses.selectors";
import {CourseModelAdd, CoursesState} from "../../models/Course";
import {RequestAddCourse, RequestAddCourseReSet, RequestCourses} from "./courses.action";
import {CourseModel} from "../../models/CourseModel";

@Injectable({
  providedIn: 'root'
})

export class CoursesFacade {

  getAllCoursesResult$:Observable<CoursesState> = this.store.select(courseQuery.getRequestCoursesSuccess)
  getAddCourseResult$:Observable<CourseModelAdd> = this.store.select(courseQuery.getAddCourseSuccess)


  constructor(private store:Store<CoursesState>) {}

  getAll(){
    this.store.dispatch(new RequestCourses())
  }

  addCourse(course:CourseModel){
    this.store.dispatch(new RequestAddCourse(course))
  }
  resetState() {
    this.store.dispatch(new RequestAddCourseReSet())
  }
}

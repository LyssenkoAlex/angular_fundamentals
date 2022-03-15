import {Injectable} from "@angular/core";
import {Store} from '@ngrx/store'
import {Observable} from "rxjs";
import {courseQuery} from "./courses.selectors";
import {CourseModelRequest, CoursesState} from "../../models/Course";
import {
  RequestAddCourse,
  RequestAddCourseReSet,
  RequestCourseById,
  RequestCourseByIdFail,
  RequestCourses, RequestDeleteCourse, RequestEditCourse
} from "./courses.action";
import {CourseModel} from "../../models/CourseModel";

@Injectable({
  providedIn: 'root'
})

export class CoursesFacade {

  getAllCoursesResult$:Observable<CoursesState> = this.store.select(courseQuery.getRequestCoursesSuccess)
  getAddCourseResult$:Observable<CourseModelRequest> = this.store.select(courseQuery.getAddCourseSuccess)
  getCourseByIdResult$:Observable<CourseModelRequest> = this.store.select(courseQuery.getCourseByIdSuccess)
  getEditCourseResult$:Observable<CourseModelRequest> = this.store.select(courseQuery.getEditCourseSuccess)
  getDeleteCourseResult$:Observable<CourseModelRequest> = this.store.select(courseQuery.getDeleteCourseSuccess)


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
  getCourseById(id: string){
    this.store.dispatch(new RequestCourseById(id))
  }
  editCourse(course:CourseModel, id:string) {
    this.store.dispatch(new RequestEditCourse({course:course, id:id}))
  }
  deleteCourse(id:string){
    this.store.dispatch(new RequestDeleteCourse(id))
  }
}

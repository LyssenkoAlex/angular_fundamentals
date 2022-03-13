import { Injectable } from '@angular/core';
import {Actions} from "../models/Actions";
import {BehaviorSubject} from "rxjs";
import {AuthorsService} from "./authors.service";
import {CourseModel} from "../models/CourseModel";
import {CoursesService} from "./courses.service";

@Injectable({
  providedIn: 'root'
})
export class CoursesStoreService {

  private courses$$: BehaviorSubject<Array<CourseModel>> = new BehaviorSubject<Array<CourseModel>>([])
  public courses$ = this.courses$$.asObservable();

  private course$$: BehaviorSubject<CourseModel|null> = new BehaviorSubject<CourseModel|null>(null)
  public course$ = this.course$$.asObservable();

  private isLoading$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  public isLoading$  = this.isLoading$$.asObservable();


  constructor(private courseService: CoursesService) {
    this.courseService.setActionRunnerFn = this.processAction.bind(this)
  }

  processAction = async (action: string, data: any) => {
    switch (true) {
      case (action === Actions.INIT_COURSES):
        this.courseService.triggerActionRunner()
        break;
      case(action === Actions.ALL_COURSES):
        this.isLoading$$.next(true);
        this.courseService.getAll()
        break;

      case(action === Actions.RECEIVED_COURSES):
        this.courses$$.next(data)
        this.isLoading$$.next(false);
        break;

      case(action === Actions.ADD_COURSES):
        this.courseService.addCourse(data)
        break;
      case (action === Actions.COURSE_BY_ID):
        this.courseService.getById(data)
        break;
      case(action === Actions.RECEIVED_COURSE_BY_ID):
        this.course$$.next(data)
        break;
      case(action === Actions.EDIT_COURSE):
        this.courseService.editCourse(data.course, data.id)
        break;
      case(action === Actions.DELETE_COURSE):
        this.courseService.deleteCourse(data)
        break;

    }
  }
}

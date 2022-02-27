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

  private isLoading$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  public isLoading$  = this.isLoading$$.asObservable();


  constructor(private authorService: CoursesService) {
    this.authorService.setActionRunnerFn = this.processAction.bind(this)
  }

  processAction = async (action: string, data: any) => {
    switch (true) {
      case (action === Actions.INIT_COURSES):
        console.log('processAction INIT_COURSE');
        this.authorService.triggerActionRunner()
        break;
      case(action === Actions.ALL_COURSES):
        console.log('processAction ALL_COURSES');
        this.isLoading$$.next(true);
        this.authorService.getAll()
        break;

      case(action === Actions.RECEIVED_COURSES):
        console.log('processAction RECEIVED_COURSE', data);
        this.courses$$.next(data)
        this.isLoading$$.next(false);
        break;
    }
  }

}

import {Component, OnInit} from '@angular/core';
import {CourseModel} from "../../models/CourseModel";
import {CoursesStoreService} from "../../services/courses-store.service";
import {CoursesFacade} from "../../store/courses/courses.facade";
import {CoursesState} from "../../models/Course";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: CourseModel[] = []


  constructor(private store:CoursesFacade) {}

  ngOnInit() {
    this.store.getAll()
    this.store.getAllCoursesResult$.subscribe((res:CoursesState) => {
      this.courses = res.result.courses
    })
  }

}

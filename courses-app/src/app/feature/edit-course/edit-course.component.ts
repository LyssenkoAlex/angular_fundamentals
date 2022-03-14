import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CoursesStoreService} from "../../services/courses-store.service";
import {Actions} from "../../models/Actions";
import {CourseModel} from "../../models/CourseModel";
import {AuthorsStoreService} from "../../services/authors-store.service";
import {AuthorModel} from "../../models/Author";
import {CoursesFacade} from "../../store/courses/courses.facade";
import {CourseModelRequest} from "../../models/Course";

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  id: string = "";
  private sub: any;
  authors: Array<AuthorModel> = []
  course: CourseModel = {authors: [], creationDate: "", description: "", duration: 0, id: "", title: '', selectedAuthor:''};



  constructor(private route: ActivatedRoute, private store: CoursesFacade, private storeAuthor:AuthorsStoreService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];

      if (this.id) {
        this.store.getCourseById(this.id)

        this.store.getCourseByIdResult$.subscribe((res:CourseModelRequest) => {
          console.log("CourseDetailsComponent resp: ", res)
          Object.assign(this.course, res.course)

          let date = new Date(this.course.creationDate)
          let dateRes = date.toLocaleDateString("en-GB", { // you can use undefined as first argument
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })
          this.course.creationDate = `${dateRes.split('/')[2]}-${dateRes.split('/')[1]}-${dateRes.split('/')[0]}`
        })


      }
    });
  }

  onFormSubmit() {
    this.store.editCourse(this.course, this.id)
    this.store.getEditCourseResult$.subscribe((res) => {
      console.log("edit resut: ", res)
    })
  }
}

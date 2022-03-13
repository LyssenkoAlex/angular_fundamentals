import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CoursesStoreService} from "../../services/courses-store.service";
import {Actions} from "../../models/Actions";
import {CourseModel} from "../../models/CourseModel";
import {AuthorsStoreService} from "../../services/authors-store.service";
import {AuthorModel} from "../../models/Author";

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  id: string | undefined;
  private sub: any;
  authors: Array<AuthorModel> = []

  model: CourseModel = {authors: [], creationDate: "", description: "", duration: 0, id: "", title: '', selectedAuthor:''};



  constructor(private route: ActivatedRoute, private store: CoursesStoreService, private storeAuthor:AuthorsStoreService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];

      if (this.id) {
        this.store.processAction(Actions.COURSE_BY_ID, this.id)

        this.store.course$.subscribe((data) => {

          if(data) {
            this.model = data

            let date: Date = new Date(this.model.creationDate)
            let dateRes = date.toLocaleDateString("en-GB", { // you can use undefined as first argument
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })

            this.model.creationDate = `${dateRes.split('/')[2]}-${dateRes.split('/')[1]}-${dateRes.split('/')[0]}`

            this.storeAuthor.authors$.subscribe((data) => {
              this.model.selectedAuthor = data.filter((item) => item.id === this.model.authors[0])[0]?.name
              this.authors = data
            })
          }
        })


      }
    });
  }

  onFormSubmit() {
    this.store.processAction(Actions.EDIT_COURSE, {course:this.model, id:this.id})
  }
}

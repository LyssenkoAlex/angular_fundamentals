import { Component, OnInit } from '@angular/core';
import {CourseModel} from "../../models/CourseModel";
import {Actions} from "../../models/Actions";
import {ActivatedRoute} from "@angular/router";
import {CoursesStoreService} from "../../services/courses-store.service";
import {AuthorsStoreService} from "../../services/authors-store.service";
import {AuthorModel} from "../../models/Author";

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  private sub: any;
  id: string | undefined;

  constructor(private route: ActivatedRoute, private store: CoursesStoreService, private storeAuthor:AuthorsStoreService) {
  }
  course: CourseModel | undefined;

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id) {
        this.store.processAction(Actions.COURSE_BY_ID, this.id)
        this.store.course$.subscribe((data) => {
          if(data) {
            this.course = data
            let date: Date = new Date(this.course.creationDate)
            let dateRes = date.toLocaleDateString("en-GB", { // you can use undefined as first argument
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })
            this.course.creationDate = `${dateRes.split('/')[2]}-${dateRes.split('/')[1]}-${dateRes.split('/')[0]}`

            this.storeAuthor.authors$.subscribe((data) => {
              if(this.course) {
                this.course.selectedAuthor = data.filter((item) => item.id === this.course?.authors[0])[0]?.name
              }
            })
          }
        })
      }
    });
  }
}

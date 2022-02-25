import {Component, OnInit} from '@angular/core';
import {AuthorsStoreService} from "./services/authors-store.service";
import {Actions} from "./models/Actions";
import {CoursesStoreService} from "./services/courses-store.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'courses-app';
  verified: boolean = false;

  constructor(private storeAuthors: AuthorsStoreService, private courseStore:CoursesStoreService) {
  }

  ngOnInit() {
    this.storeAuthors.processAction(Actions.INIT_AUTHORS, null)
    this.courseStore.processAction(Actions.INIT_COURSES, null)
  }
}

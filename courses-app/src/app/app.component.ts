import {Component, OnInit} from '@angular/core';
import {AuthorsStoreService} from "./services/authors-store.service";
import {Actions} from "./models/Actions";
import {CoursesStoreService} from "./services/courses-store.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'courses-app';
  verified: boolean = false;

  constructor() {}


}

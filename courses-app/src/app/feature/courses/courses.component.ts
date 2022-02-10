import { Component } from '@angular/core';
import {Course} from "../../data/schema/Course";
import data from '../../data/mock.json'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent  {

  courses:Course[] = data.projects

}

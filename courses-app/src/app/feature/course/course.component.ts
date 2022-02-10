import { Component, Input } from '@angular/core';
import {Course} from '../../data/schema/Course';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})

export class CourseComponent {
  faEdit = faEdit;
  faTrash = faTrash;
 @Input() course: Course | undefined;

}

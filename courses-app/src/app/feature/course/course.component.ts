import { Component, Input } from '@angular/core';
import {Course} from '../../models/Course';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Output, EventEmitter } from '@angular/core';
import {CourseModel} from "../../models/CourseModel";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})

export class CourseComponent {
  faEdit = faEdit;
  faTrash = faTrash;
  @Input() editable:boolean = false
  @Input() course: CourseModel | undefined;


  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string|undefined) {
    this.newItemEvent.emit(value);
  }
}

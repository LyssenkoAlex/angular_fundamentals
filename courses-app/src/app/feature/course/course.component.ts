import {Component, Input, OnInit} from '@angular/core';
import {Course} from '../../models/Course';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Output, EventEmitter } from '@angular/core';
import {CourseModel} from "../../models/CourseModel";
import {UserStoreService} from "../../user/user-service/user-store.service";
import {CoursesStoreService} from "../../services/courses-store.service";
import {Actions} from "../../models/Actions";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})

export class CourseComponent implements OnInit {
  faEdit = faEdit;
  faTrash = faTrash;
  @Input() editable:boolean = false
  @Input() course: CourseModel | undefined;
  isAdmin:boolean = false

  constructor(private userService: UserStoreService, private store: CoursesStoreService) { }

  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string|undefined) {
    this.newItemEvent.emit(value);
  }

  ngOnInit(): void {
    this.userService.isAdmin$.subscribe(data => this.isAdmin = data)
  }

  clickMethod(id: string|undefined) {
    if(confirm("Are you sure to delete course")) {
      this.store.processAction(Actions.DELETE_COURSE, id)
    }
    else {

    }
  }

}

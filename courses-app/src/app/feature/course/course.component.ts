import {Component, Input, OnInit} from '@angular/core';
import {Course} from '../../models/Course';
import {faEdit} from '@fortawesome/free-solid-svg-icons';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {Output, EventEmitter} from '@angular/core';
import {CourseModel} from "../../models/CourseModel";
import {UserStoreService} from "../../user/user-service/user-store.service";
import {CoursesStoreService} from "../../services/courses-store.service";
import {Actions} from "../../models/Actions";
import {CoursesFacade} from "../../store/courses/courses.facade";
import {Router} from "@angular/router";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})

export class CourseComponent implements OnInit {
  faEdit = faEdit;
  faTrash = faTrash;
  @Input() editable: boolean = false
  @Input() course: CourseModel = {
    authors: [],
    creationDate: "",
    duration: 0,
    id: "",
    title: "",
    description: "",
    selectedAuthor: ""
  };
  isAdmin: boolean = false

  constructor(private userService: UserStoreService, private store: CoursesFacade, private router: Router) {
  }

  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string | undefined) {
    this.newItemEvent.emit(value);
  }

  ngOnInit(): void {
    this.userService.isAdmin$.subscribe(data => this.isAdmin = data)

  }

  clickMethod(id: string) {
    if (confirm("Are you sure to delete course")) {
      this.store.deleteCourse(id)
      this.store.getDeleteCourseResult$.subscribe((res) => {
        console.log("works getDeleteCourseResult$", res)

        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
          this.router.navigate(['/courses']));
      })

    } else {

    }
  }

}

import {Component} from '@angular/core';
import {CourseModel} from "../../models/CourseModel";
import {CoursesStoreService} from "../../services/courses-store.service";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  public foods: Object | undefined;
  searchValue: string = '';
  condition: boolean = false;
  items: [string] = [''];
  search: string = ''

  courses: CourseModel[] | undefined
  isLoading: boolean  = true

  constructor(private store:CoursesStoreService) {}

  ngOnInit() {
    this.store.courses$.subscribe(data => this.courses = data)
    this.store.isLoading$.subscribe(data => this.isLoading = data)
  }


  addItem(newItem: string) {
    this.items?.push(newItem);
  }


  onSubmit($event: any) {
  }

}

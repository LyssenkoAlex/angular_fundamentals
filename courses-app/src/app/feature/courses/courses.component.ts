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
  res_list: [string] = [''];
  res_cnt: number = 0;
  prevText: string = '';
  list_lang = ['java', 'c++', 'python', 'c', 'javascript'];

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

    this.condition = true;
    this.prevText = this.searchValue;
    this.res_cnt = 0;
    this.res_list = [''];

    setTimeout(() => {
      this.condition = false;
      for (let i = 0; i < this.list_lang.length; i++) {
        if (this.list_lang[i] === this.prevText.toLowerCase()
          || this.list_lang[i].startsWith(this.prevText)) {
          this.res_cnt += 1;
          this.res_list.push(this.list_lang[i]);
        }
      }
    }, 3000);
    this.searchValue = '';

  }

}

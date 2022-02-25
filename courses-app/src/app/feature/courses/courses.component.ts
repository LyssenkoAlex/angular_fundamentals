import {Component} from '@angular/core';
import {Course} from "../../data/schema/Course";
import data from '../../data/mock.json'
import {AuthorsStoreService} from "../../services/authors-store.service";
import {AuthorModel} from "../../models/Author";
import {Actions} from "../../models/Actions";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  public foods: Object | undefined;
  searchValue: string = '';
  condition: boolean = false;
  courses: Course[] = this.getData()
  items: [string] = [''];
  search: string = ''
  res_list: [string] = [''];
  res_cnt: number = 0;
  prevText: string = '';
  list_lang = ['java', 'c++', 'python', 'c', 'javascript'];

  addItem(newItem: string) {
    this.items?.push(newItem);
  }


  getData(): Course[] {

    return data.projects.map((item: Course) => {
      item.durationView = `${(item.duration - (item.duration % 60)) / 60} h ${(item.duration % 60)} m`
      item.dateView = new Date(item.creationDate).toISOString().split('T')[0]
      return item;
    })
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

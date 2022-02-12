import {Component} from '@angular/core';
import {Course} from "../../data/schema/Course";
import data from '../../data/mock.json'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  courses: Course[] = this.getData()
  items: [string]  = [''];
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

}

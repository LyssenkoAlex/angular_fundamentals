import { Component } from '@angular/core';
import {AuthorsStoreService} from "./services/authors-store.service";
import {Actions} from "./models/Actions";
import {AuthorModel} from "./models/Author";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'courses-app';
  verified: boolean = false;

  constructor(private store: AuthorsStoreService) {
    this.store.processAction(Actions.INIT_AUTHORS, null)
    this.store.authorsData.subscribe((data:AuthorModel) => {
      console.log('subscribe: ', data)
    })
  }

}

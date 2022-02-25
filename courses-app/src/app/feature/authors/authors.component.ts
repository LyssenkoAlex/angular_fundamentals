import { Component, OnInit } from '@angular/core';
import {AuthorsStoreService} from "../../services/authors-store.service";
import {AuthorModel} from "../../models/Author";
import {Actions} from "../../models/Actions";

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent  implements OnInit {

  authors: AuthorModel | undefined

  constructor(private store:AuthorsStoreService) {}

  ngOnInit() {
    console.log('step AUTH', this.store.authorsData)
    this.store.authorsData.subscribe((data) => {
      console.log("AuthorsComponent: ", data)
      this.authors = data
    })
  }

}

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

  authors: AuthorModel[] | undefined
  isLoading: boolean  = true

  constructor(private store:AuthorsStoreService) {
    console.log('loading: ', this.isLoading)
  }

  ngOnInit() {
    this.store.authorsData.subscribe((data) => {
      this.authors = data
    })

    this.store.isLoading$$.subscribe((data) => {
      this.isLoading = data
      console.log('loading: ', this.isLoading)
    })
  }

}

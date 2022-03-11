import { Component } from '@angular/core';
import {AuthorModel} from "../../models/Author";
import {AuthorsFacadeService} from "../../store/authors/authors-facade.service";

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent   {

  authors: AuthorModel[] | undefined
  isLoading: boolean  = true
  authors$ = this.store.authors$

  constructor(private store:AuthorsFacadeService) {
    this.store.getAll()
  }


}

import {Injectable} from "@angular/core";
import {Store} from '@ngrx/store'
import {AuthorState} from "./author.reducer";
import {authorsQuery} from "./authors.selectors";
import {RequestAddAuthor, RequestAuthors} from "./author.action";
import {AuthorModel} from "../../models/Author";

@Injectable({
  providedIn: 'root'
})

export class AuthorsFacade {
  loaded$ = this.store.select(authorsQuery.getRequestAuthors)
  authors$ = this.store.select(authorsQuery.getRequestAuthorsSuccess)

  constructor(private store:Store<AuthorState>) {
    console.log("AuthorsFacade constructor")
  }

  getAll(){
    console.log('AuthorsFacade getAll')
    this.store.dispatch(new RequestAuthors())
  }

  addAuthor(author:AuthorModel){
    this.store.dispatch(new RequestAddAuthor(author))
  }
}

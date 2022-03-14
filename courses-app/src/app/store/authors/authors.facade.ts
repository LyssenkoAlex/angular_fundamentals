import {Injectable} from "@angular/core";
import {Store} from '@ngrx/store'
import {authorsQuery} from "./authors.selectors";
import {RequestAddAuthor, RequestAuthors} from "./author.action";
import {AuthorModel, AuthorModelAdd, AuthorState} from "../../models/Author";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AuthorsFacade {
  loaded$ = this.store.select(authorsQuery.getRequestAuthors)
  getAllAuthorsResult$:Observable<AuthorState> = this.store.select(authorsQuery.getRequestAuthorsSuccess)
  getAddAuthorResult$:Observable<AuthorModelAdd> = this.store.select(authorsQuery.getAddAuthorsSuccess)


  constructor(private store:Store<AuthorState>) {}

  getAll(){
    this.store.dispatch(new RequestAuthors())
  }

  addAuthor(author:AuthorModel){
    this.store.dispatch(new RequestAddAuthor(author))
  }
}

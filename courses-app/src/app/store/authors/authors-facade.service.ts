import {Injectable} from "@angular/core";
import {Store} from '@ngrx/store'
import {AuthorState} from "./author.reducer";
import {authorsQuery} from "./authors.selectors";
import {RequestAuthors} from "./author.action";

@Injectable({
  providedIn: 'root'
})

export class AuthorsFacadeService {
  loaded$ = this.store.select(authorsQuery.getRequestAuthors)
  authors$ = this.store.select(authorsQuery.getRequestAuthorsSuccess)

  constructor(private store:Store<AuthorState>) {
    console.log("AuthorsFacadeService constructor")
  }

  getAll(){
    console.log('AuthorsFacadeService getAll')
    this.store.dispatch(new RequestAuthors())
  }
}

import { Injectable } from '@angular/core';
import {Actions, ofType, Effect} from '@ngrx/effects';
import {catchError, map, mergeMap, switchMap, tap} from 'rxjs/operators';
import { of } from 'rxjs';
import {AuthorsService} from "../../services/authors.service";
import {
  AuthorsApiActionTypes,
  RequestAuthorsFail,
  RequestAuthorsSuccess
} from "./author.action";


@Injectable()
export class AuthorEffects {

  constructor(private actions$: Actions, private authorService: AuthorsService) {
    console.log("AuthorEffects constructor")
  }

  // effect from simulating an API call success
  @Effect()
  getAuthors$ = this.actions$.pipe(
    ofType(AuthorsApiActionTypes.RequestAuthors),
    switchMap((action) =>
      this.authorService.getAuthorOb().pipe(
        map((users) =>  {
          console.log("Effect: ", users)
          return new RequestAuthorsSuccess(users) }),
        catchError(error => of(new RequestAuthorsFail(error)))
      )
    )
  );


}

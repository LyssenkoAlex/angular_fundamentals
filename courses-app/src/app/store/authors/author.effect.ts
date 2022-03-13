import { Injectable } from '@angular/core';
import {Actions, ofType, createEffect} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import { of } from 'rxjs';
import {AuthorsService} from "../../services/authors.service";
import {
  AuthorsApiActionTypes, RequestAddAuthor, RequestAddAuthorFail, RequestAddAuthorSuccess,
  RequestAuthorsFail,
  RequestAuthorsSuccess
} from "./author.action";
import {AuthorModel, AuthorModelAdd} from "../../models/Author";


@Injectable()
export class AuthorEffects {

  constructor(private actions$: Actions, private authorService: AuthorsService) {
  }

  getAuthors$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthorsApiActionTypes.RequestAuthors),
      switchMap((action) => this.authorService.getAuthorOb().pipe(
          map((users) => {
            console.log("Effect: ", users);
            return new RequestAuthorsSuccess(users);
          }),
          catchError(error => of(new RequestAuthorsFail(error)))
        )
      )
    );});

  addAuthor$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthorsApiActionTypes.RequestAddAuthor),
      switchMap((action:any) => this.authorService.addAuthorOb(action.payload).pipe(
          map((result:AuthorModelAdd) => {
            console.log("RequestAddAuthor: ", result)
            return new RequestAddAuthorSuccess(result);
          }),
          catchError(error => of(new RequestAddAuthorFail(error)))
        )
      )
    );});



}

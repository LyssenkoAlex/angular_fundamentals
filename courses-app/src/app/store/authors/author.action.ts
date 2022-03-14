import {Action} from "@ngrx/store";
import {AuthorModel, AuthorModelAdd, AuthorState} from "../../models/Author";

export enum AuthorsApiActionTypes {
  RequestAuthors = 'requestAuthors',
  RequestAuthorsSuccess = 'requestAuthorsSuccess',
  RequestAuthorsFail = 'requestAuthorsFail',
  RequestAddAuthor = 'requestAddAuthor',
  RequestAddAuthorSuccess = 'RequestAddAuthorSuccess',
  RequestAddAuthorFail = 'RequestAddAuthorFail'

}

export class RequestAuthors implements Action {
  readonly type = AuthorsApiActionTypes.RequestAuthors
}

export class RequestAuthorsSuccess implements Action {
  readonly type = AuthorsApiActionTypes.RequestAuthorsSuccess

  constructor(public payload: AuthorState) {
  }
}

export class RequestAuthorsFail implements Action {
  readonly type = AuthorsApiActionTypes.RequestAuthorsFail

  constructor(public payload: any) {
  }
}

export class RequestAddAuthor implements Action {
  constructor(public payload: AuthorModel) {
  }
  readonly type = AuthorsApiActionTypes.RequestAddAuthor
}

export class RequestAddAuthorSuccess implements Action {
  constructor(public payload: AuthorModelAdd) {}
  readonly type = AuthorsApiActionTypes.RequestAddAuthorSuccess
}

export class RequestAddAuthorFail implements Action {
  constructor(public payload:any) {}
  readonly type = AuthorsApiActionTypes.RequestAddAuthorFail
}

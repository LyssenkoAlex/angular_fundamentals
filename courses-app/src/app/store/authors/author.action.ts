import {Action} from "@ngrx/store";
import {AuthorModel, AuthorModelAddASuccess} from "../../models/Author";

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

  constructor(public payload: AuthorModel[]) {
    console.log("RequestAuthorsSuccess constructor", payload)
  }
}

export class RequestAuthorsFail implements Action {
  readonly type = AuthorsApiActionTypes.RequestAuthorsFail

  constructor(public payload: any) {
  }
}

export class RequestAddAuthor implements Action {
  constructor(public payload: AuthorModel) {
    console.log("RequestAddAuthor constructor", payload)
  }
  readonly type = AuthorsApiActionTypes.RequestAddAuthor
}

export class RequestAddAuthorSuccess implements Action {
  constructor(public payload: AuthorModelAddASuccess) {
    console.log("RequestAddAuthor constructor", payload)
  }
  readonly type = AuthorsApiActionTypes.RequestAddAuthorSuccess
}

export class RequestAddAuthorFail implements Action {
  readonly type = AuthorsApiActionTypes.RequestAddAuthorFail
}

export type AuthorActions =
  RequestAuthors
  | RequestAuthorsSuccess
  | RequestAuthorsFail
  | RequestAddAuthor
  | RequestAddAuthorSuccess
  | RequestAddAuthorFail


import {Action} from "@ngrx/store";
import {AuthorModel} from "../../models/Author";

export enum AuthorsApiActionTypes {
  RequestAuthors = 'requestAuthors',
  RequestAuthorsSuccess = 'requestAuthorsSuccess',
  RequestAuthorsFail = 'requestAuthorsFail'
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

  export type AuthorActions = RequestAuthors | RequestAuthorsSuccess | RequestAuthorsFail
  export const fromAuthorActions = { RequestAuthors , RequestAuthorsSuccess , RequestAuthorsFail}


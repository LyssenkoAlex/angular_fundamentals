import {AuthorModel} from "../../models/Author";
import {AuthorActions, AuthorsApiActionTypes} from "./author.action";

export interface AuthorState {
  loading: boolean;
  authors: AuthorModel[],
  error?:any,
}

export const initialState: AuthorState = {
  loading: false,
  authors: []
}

export function reducer(
  state:AuthorState = initialState,
  action: AuthorActions
): AuthorState {
  switch (action.type) {
    case AuthorsApiActionTypes.RequestAuthors: {
      return {
        ...state,
        loading: true
      }
    }
    case AuthorsApiActionTypes.RequestAuthorsSuccess: {
      return {
        ...state,
        loading: true,
        authors: action.payload
      }
    }
    case AuthorsApiActionTypes.RequestAuthorsFail: {
      return {
        ...state,
        loading: false,
        authors: action.payload
      }
    }
    default: {
      return state
    }
  }
}

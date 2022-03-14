import {AuthorModelAdd, AuthorState, initialState, initialStateAddModel} from "../../models/Author";
import {AuthorsApiActionTypes} from "./author.action";


export function reducer(
  state:AuthorState = initialState,
  action: any
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
        result: {successful: action.payload.successful, authors:action.payload.result},
      }
    }
    case AuthorsApiActionTypes.RequestAuthorsFail: {
      return {
        ...state,
        loading: false,
        result: {successful: action.payload.successful, authors:action.payload.result},
      }
    }
    default: {
      return state
    }
  }
}

export function addActionReducer(state:AuthorModelAdd = initialStateAddModel, action:any):AuthorModelAdd {
  console.log("addActionReducer: ", action)
  switch (action.type) {
    case AuthorsApiActionTypes.RequestAddAuthor: {
      return {
        ...state,
        sendRequest: true
      }
    }
    case AuthorsApiActionTypes.RequestAddAuthorSuccess: {
      return {
        ...state,
        successful:action.payload.successful,
        result: {id: action.payload.result.id, name:action.payload.result.name},
      }
    }
    case AuthorsApiActionTypes.RequestAddAuthorFail: {
      return {
        ...state,
        sendRequest: false,
      }
    }
    default: {
      return state
    }
  }
}

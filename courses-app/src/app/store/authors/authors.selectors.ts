import { createFeatureSelector, createSelector } from '@ngrx/store';
import {AuthorModelAdd, AuthorState, initialState, initialStateAddModel} from "../../models/Author";



const getAuthorsState = createFeatureSelector<AuthorState>('authors');
const getRequestAuthors = createSelector(getAuthorsState, (state:AuthorState) => state.loading)
const getRequestAuthorsSuccess = createSelector(getAuthorsState, getRequestAuthors, (state:AuthorState, isLoaded) => {
    return isLoaded ? state : initialState
})
const getRequestAuthorsFail = createSelector(getAuthorsState, (state:AuthorState) => state.error);


const getAddAuthorState = createFeatureSelector<AuthorModelAdd>('add-author')
const getAddAuthors = createSelector(getAddAuthorState, (state) => state.sendRequest)
const getAddAuthorsSuccess = createSelector(getAddAuthorState, getAddAuthors, (state:AuthorModelAdd, sendRequest) => {
  return sendRequest ? state : initialStateAddModel
})
const getAddAuthorFail = createSelector(getAddAuthorState, (state:AuthorModelAdd) => state.error)

export const authorsQuery = {
  getRequestAuthors,
  getRequestAuthorsSuccess,
  getRequestAuthorsFail,
  getAddAuthors,
  getAddAuthorsSuccess,
  getAddAuthorFail
}

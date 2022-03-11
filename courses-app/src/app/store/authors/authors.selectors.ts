import { createFeatureSelector, createSelector } from '@ngrx/store';
import {AuthorState} from "./author.reducer";


const getAuthorsState = createFeatureSelector<AuthorState>('authors');

const getRequestAuthors = createSelector(getAuthorsState, (state:AuthorState) => state.loading)
const getRequestAuthorsSuccess = createSelector(getAuthorsState, getRequestAuthors, (state:any, isLoaded) => {
  console.log("selector getRequestAuthorsSuccess: ", state)
    return isLoaded ? state.authors.result : []
})
const getRequestAuthorsFail = createSelector(getAuthorsState, (state:AuthorState) => state.error);

export const authorsQuery = {
  getRequestAuthors,
  getRequestAuthorsSuccess,
  getRequestAuthorsFail
}

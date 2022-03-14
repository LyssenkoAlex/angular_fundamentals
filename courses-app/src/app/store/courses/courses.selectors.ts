import { createFeatureSelector, createSelector } from '@ngrx/store';
import {CourseModelAdd, CoursesState, initialCoursesState, initialStateAddModel} from "../../models/Course";



const getCoursesState = createFeatureSelector<CoursesState>('courses');
const getRequestCourses = createSelector(getCoursesState, (state:CoursesState) => state.loading)
const getRequestCoursesSuccess = createSelector(getCoursesState, getRequestCourses, (state:CoursesState, isLoaded) => {
  return isLoaded ? state : initialCoursesState
})
const getRequestCoursesFail = createSelector(getCoursesState, (state:CoursesState) => state.error);


const getAddCourseState = createFeatureSelector<CourseModelAdd>('add-course')
const getAddCourse = createSelector(getAddCourseState, (state) => state.sendRequest)
const getAddCourseSuccess = createSelector(getAddCourseState, getAddCourse, (state:CourseModelAdd, sendRequest) => {
  return sendRequest ? state : initialStateAddModel
})
const getAddCourseFail = createSelector(getAddCourseState, (state:CourseModelAdd) => state.error)

export const courseQuery = {
  getRequestCourses,
  getRequestCoursesSuccess,
  getRequestCoursesFail,
  getAddCourse,
  getAddCourseSuccess,
  getAddCourseFail
}

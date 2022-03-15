import { createFeatureSelector, createSelector } from '@ngrx/store';
import {CourseModelRequest, CoursesState, initialCoursesState, initialStateAddModel} from "../../models/Course";
import {CourseModel} from "../../models/CourseModel";



const getCoursesState = createFeatureSelector<CoursesState>('courses');
const getRequestCourses = createSelector(getCoursesState, (state:CoursesState) => state.loading)
const getRequestCoursesSuccess = createSelector(getCoursesState, getRequestCourses, (state:CoursesState, isLoaded) => {
  return isLoaded ? state : initialCoursesState
})
const getRequestCoursesFail = createSelector(getCoursesState, (state:CoursesState) => state.error);


const getAddCourseState = createFeatureSelector<CourseModelRequest>('add-course')
const getAddCourse = createSelector(getAddCourseState, (state) => state.sendRequest)
const getAddCourseSuccess = createSelector(getAddCourseState, getAddCourse, (state:CourseModelRequest, sendRequest) => {
  return sendRequest ? state : initialStateAddModel
})
const getAddCourseFail = createSelector(getAddCourseState, (state:CourseModelRequest) => state.error)

const getCourseByIdState = createFeatureSelector<CourseModelRequest>('course-by-id')
const getCourseById = createSelector(getCourseByIdState, (state) => state.sendRequest)
const getCourseByIdSuccess = createSelector(getCourseByIdState, getCourseById, (state:CourseModelRequest, sendRequest) => {
  return sendRequest ? state : initialStateAddModel
})
const getCourseByIdFail = createSelector(getCourseByIdState, (state:CourseModelRequest) => state.error)

const getEditCourseState = createFeatureSelector<CourseModelRequest>('edit-course')
const getEditCourse = createSelector(getEditCourseState, (state) => state.sendRequest)
const getEditCourseSuccess = createSelector(getEditCourseState, getEditCourse, (state:CourseModelRequest, sendRequest) => {
  return sendRequest ? state : initialStateAddModel
})
const getEditCourseFail = createSelector(getEditCourseState, (state:CourseModelRequest) => state.error)

const getDeleteCourseState = createFeatureSelector<CourseModelRequest>('delete-course')
const getDeleteCourse = createSelector(getDeleteCourseState, (state) => state.sendRequest)
const getDeleteCourseSuccess = createSelector(getDeleteCourseState, getDeleteCourse, (state:CourseModelRequest, sendRequest) => {
  console.log("selector getDeleteCourseSuccess: ", state)
  return sendRequest ? state : initialStateAddModel
})
const getDeleteCourseFail = createSelector(getDeleteCourseState, (state:CourseModelRequest) => state.error)


export const courseQuery = {
  getRequestCourses,
  getRequestCoursesSuccess,
  getRequestCoursesFail,
  getAddCourse,
  getAddCourseSuccess,
  getAddCourseFail,
  getCourseById,
  getCourseByIdSuccess,
  getCourseByIdFail,
  getEditCourse,
  getEditCourseSuccess,
  getEditCourseFail,
  getDeleteCourseSuccess,
  getDeleteCourseFail,
}

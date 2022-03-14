
import {CourseModelAdd, CoursesState, initialCoursesState, initialStateAddModel} from "../../models/Course";
import {CoursesApiActionTypes} from "./courses.action";

export function coursesReducer(
  state:CoursesState = initialCoursesState,
  action: any
): CoursesState {

  switch (action.type) {
    case CoursesApiActionTypes.RequestCourses: {
      return {
        ...state,
        loading: true
      }
    }
    case CoursesApiActionTypes.RequestCoursesSuccess: {
      return {
        ...state,
        loading: true,
        result: {successful: action.payload.successful, courses:action.payload.result},
      }
    }
    case CoursesApiActionTypes.RequestCoursesFail: {
      return {
        ...state,
        loading: false,
        result: {successful: action.payload.successful, courses:action.payload.result},
      }
    }
    default: {
      return state
    }
  }
}

export function addCourseReducer(
  state:CourseModelAdd = initialStateAddModel,
  action: any
): CourseModelAdd {
    console.log("addCourseReducer action: ", action)
    console.log("addCourseReducer state: ", state)
  switch (action.type) {
    case CoursesApiActionTypes.RequestAddCourse: {
      return {
        ...state,
        sendRequest:true,
      }
    }
    case CoursesApiActionTypes.RequestAddCourseSuccess: {
      return {
        ...state,
        successful: true
      }
    }
    case CoursesApiActionTypes.RequestAddCoursesFail: {
      return {
        ...state,
        successful: false,
        error:action.payload
      }
    }
    case CoursesApiActionTypes.RequestAddCourseReSet: {
      return {
        ...state,
        successful:false,
      }
    }
    default: {
      return state
    }
  }
}

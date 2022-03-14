import {CourseModelRequest, CoursesState, initialCoursesState, initialStateAddModel} from "../../models/Course";
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
        successful: action.payload.successful,
        result: { courses:action.payload.result},
      }
    }
    case CoursesApiActionTypes.RequestCoursesFail: {
      return {
        ...state,
        loading: false,
        successful: action.payload.successful,
        result: {courses:action.payload.result},
      }
    }
    default: {
      return state
    }
  }
}

export function addCourseReducer(
  state:CourseModelRequest = initialStateAddModel,
  action: any
): CourseModelRequest {

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
    case CoursesApiActionTypes.RequestCourseById: {
      return {
        ...state,
        sendRequest:true,
      }
    }
    case CoursesApiActionTypes.RequestCourseByIdSuccess: {
      return {
        ...state,
        successful: action.payload.successful,
        course: action.payload,
      }
    }
    case CoursesApiActionTypes.RequestCourseByIdFail: {
      return {
        ...state,
        successful: false,
        error:action.payload
      }
    }
    case CoursesApiActionTypes.RequestEditCourse: {
      return {
        ...state,
        sendRequest:true,
      }
    }
    case CoursesApiActionTypes.RequestEditCourseSuccess: {
      return {
        ...state,
        successful: action.payload.successful,
        course: action.payload,
      }
    }
    case CoursesApiActionTypes.RequestEditCourseFail: {
      return {
        ...state,
        successful: false,
        error:action.payload
      }
    }

    default: {
      return state
    }
  }
}

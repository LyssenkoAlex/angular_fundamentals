
export interface Course {
  title: string;
  description: string;
  creationDate: string;
  duration: number;
  authors: string[];
  id: string;
}

export interface CoursesState {
  loading: boolean;
  successful:boolean
  result: {courses: Course[] },
  error?: any,
}

export const initialCoursesState: CoursesState = {
  loading: false,
  successful:false,
  result: {  courses: [] },
}

export interface CourseModelRequest {
  sendRequest:boolean,
  successful: boolean;
  course:Course
  error?:any
}

export const initialStateAddModel: CourseModelRequest = {
  sendRequest:false,
  successful: false,
  course: {title:"", description: "", id:"",authors:[], creationDate:"",duration:0 }

}

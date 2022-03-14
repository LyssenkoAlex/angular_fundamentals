
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
  result: { successful: boolean, courses: Course[] },
  error?: any,
}

export const initialCoursesState: CoursesState = {
  loading: false,
  result: { successful: false, courses: [] },
}

export interface CourseModelAdd {
  sendRequest:boolean,
  successful: boolean;
  course:Course
  error?:any
}

export const initialStateAddModel: CourseModelAdd = {
  sendRequest:false,
  successful: false,
  course: {title:"", description: "", id:"",authors:[], creationDate:"",duration:0 }

}

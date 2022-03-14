import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Actions} from "../models/Actions";
import {CourseModel} from "../models/CourseModel";
import {Router} from "@angular/router";
import {CoursesStoreService} from "./courses-store.service";
import {Observable} from "rxjs";
import {AuthorState} from "../models/Author";
import {CoursesState} from "../models/Course";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {


  private API_ALL_COURSES = "http://localhost:3000/courses/all";
  private API_ADD_COURSES = "http://localhost:3000/courses/add";
  private API_EDIT_COURSES = "http://localhost:3000/courses/";
  private API_DELETE_COURSES = "http://localhost:3000/courses/";
  private API_BY_ID_COURSES = "http://localhost:3000/courses/";
  private API_FILTER_COURSES = "http://localhost:3000/courses/filter";

  public setActionRunnerFn: any;

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  triggerActionRunner = () => {
    this.setActionRunnerFn(Actions.ALL_COURSES, null)
  }

  getAll = async () => {
    const data: any = await this.httpClient.get(this.API_ALL_COURSES).toPromise();
    this.setActionRunnerFn(Actions.RECEIVED_COURSES, data.result)
  }

  getCourses(): Observable<CoursesState>{
    return this.httpClient.get<CoursesState>(this.API_ALL_COURSES)
  }

  addCourseObj(courseData:CourseModel): Observable<any>{
    return this.httpClient.post<CoursesState>(this.API_ADD_COURSES, courseData)
  }

  getCourseObj(id: string): Observable<any>{
    console.log("service: getCourseObj: ", id)
    return this.httpClient.get<any>(this.API_BY_ID_COURSES + id)
  }

  addCourse = async (courseData:any) => {
    const data: any = await this.httpClient.post(this.API_ADD_COURSES, courseData).toPromise();
  }

  getById = async (id: string) => {
    const data: any = await this.httpClient.get(this.API_BY_ID_COURSES + id, ).toPromise();
    this.setActionRunnerFn(Actions.RECEIVED_COURSE_BY_ID, data.result)
  }

  public addAuthor() {
    return this.httpClient.post(this.API_ADD_COURSES, {id: '56', courseTitle: 'ds'});
  }

  editCourseObj(data: CourseModel, id:string): Observable<any>{
    console.log("service: getCourseObj: ", id)
    return this.httpClient.put<any>(this.API_EDIT_COURSES + id, data)
  }

  editCourse = async (data: CourseModel, id:string) => {
    const res: any = await this.httpClient.put(this.API_EDIT_COURSES + id, data).toPromise();
    this.router.navigate(['/courses']);
  }

  deleteCourse = async(id:string) => {
    const res: any = await this.httpClient.delete(this.API_DELETE_COURSES + id).toPromise();
    this.router.navigate(['/courses']);
  }
}

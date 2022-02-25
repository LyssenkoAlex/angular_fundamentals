import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Actions} from "../models/Actions";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {


  private API_ALL_COURSES = "http://localhost:3000/courses/all";
  private API_ADD_COURSES = "http://localhost:3000/courses/add";
  private API_FILTER_COURSES = "http://localhost:3000/courses/filter";

  public setActionRunnerFn: any;

  constructor(private httpClient: HttpClient) { }

  triggerActionRunner = () => {
    this.setActionRunnerFn(Actions.ALL_COURSES, null)
  }

  getAll = async () => {

    const data: any =  await this.httpClient.get(this.API_ALL_COURSES).toPromise();
    console.log('getAll: ', data.result);
    this.setActionRunnerFn(Actions.RECEIVED_COURSES, data.result)
  }

  public addAuthor(){
    return this.httpClient.post(this.API_ADD_COURSES, {id:'56', courseTitle:'ds'});
  }
}

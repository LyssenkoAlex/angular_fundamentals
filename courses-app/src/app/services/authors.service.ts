import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Actions} from "../models/Actions";
import {AuthorModel} from "../models/Author";

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  private API_ALL_AUTHORS = "http://localhost:3000/authors/all";
  private API_ADD_AUTHORS = "http://localhost:3000/authors/add";

  public setActionRunnerFn: any;

  constructor(private httpClient: HttpClient) { }

  triggerActionRunner = () => {
    this.setActionRunnerFn(Actions.ALL_AUTHORS, null)
  }

  getAll = async () => {
    const data: any =  await this.httpClient.get(this.API_ALL_AUTHORS).toPromise();
    console.log('getAll: ', data.result);
    this.setActionRunnerFn(Actions.RECEIVED_AUTHORS, data.result)
  }

  public addAuthor(){
    return this.httpClient.post(this.API_ADD_AUTHORS, {id:'56', authorName:'ds'});
  }
}

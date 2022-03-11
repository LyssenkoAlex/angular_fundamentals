import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Actions} from "../models/Actions";
import {UserModel} from "../models/UserModel";
import {Observable} from "rxjs";

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
    this.setActionRunnerFn(Actions.RECEIVED_AUTHORS, data.result)
  }

  getAuthorOb(): Observable<any>{
    console.log("getAuthorOb")
    return this.httpClient.get(this.API_ALL_AUTHORS)
  }

  public addAuthor(){
    return this.httpClient.post(this.API_ADD_AUTHORS, {id:'56', authorName:'ds'});
  }
}

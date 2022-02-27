import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {AuthorModel} from "../../models/Author";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API_LOGIN = "http://localhost:3000/login";
  private API_LOGOUT = "http://localhost:3000/logout";
  private API_REGISTER = "http://localhost:3000/register";
  private isAuthorized$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  public isAuthorized$: Subject<boolean> = new Subject<boolean>();


  constructor(private httpClient: HttpClient) { }




  login = async() => {
    const data: any =  await this.httpClient.get(this.API_LOGIN).toPromise();
  }

  logout = async () => {
    const data: any =  await this.httpClient.get(this.API_LOGOUT).toPromise();

  }

  register = async () => {
    const data: any =  await this.httpClient.get(this.API_REGISTER).toPromise();
  }

  getMessage(): Observable<any> {
    return this.isAuthorized$.asObservable();
  }

}

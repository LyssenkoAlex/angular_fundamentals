import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {UserModel} from "../../models/UserModel";
import {Router} from "@angular/router";
import {SessionStorageService} from "./session-storage.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API_LOGIN = "http://localhost:3000/login";
  private API_LOGOUT = "http://localhost:3000/logout";
  private API_REGISTER = "http://localhost:3000/register";

  private isAuthorized$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  public isAuthorized$ = this.isAuthorized$$.asObservable()

  private currentUserSubject: BehaviorSubject<UserModel | null> = new BehaviorSubject<any>(localStorage.getItem('currentUser'))
  public currentUser = this.currentUserSubject.asObservable()


  constructor(private http: HttpClient, private router: Router, private sessionStorageService: SessionStorageService) {
  }

  public get currentUserValue() {
    return this.currentUserSubject.value
  }


  login = async (email: string, password: string) => {
    console.log('as : ', email, ' pass: ', password)

    const data: any = await this.http.post(this.API_LOGIN, {email, password}).toPromise();
    if (data.successful) {
      this.currentUserSubject.next(data);
      this.isAuthorized$$.next(true)
      this.sessionStorageService.setToken("token", data.result)
    } else {
      this.router.navigate(['/login']);
    }
  }

  logout  ()  {
    const token: string = this.sessionStorageService.getToken('token')
    const headers = {'Authorization': token};
    this.http.delete(this.API_LOGOUT, {headers}).subscribe((data) => {
      console.log('logout: ', data)
    });
  }

  register =  (model:UserModel) => {
    this.http.post(this.API_REGISTER, model).subscribe((result) => {
        console.log("result: ", result)
    })
  }

}

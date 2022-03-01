import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {UserModel} from "../../models/UserModel";
import {Router} from "@angular/router";

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


  constructor(private http: HttpClient, private router: Router) {
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
      localStorage.setItem('currentUser', data);
      console.log('login: ', data)
    } else {
      this.router.navigate(['/login']);
    }

  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.isAuthorized$$.next(false)
  }

  register = async () => {
    const data: any = await this.http.get(this.API_REGISTER).toPromise();
    this.isAuthorized$$.next(true)
  }

}

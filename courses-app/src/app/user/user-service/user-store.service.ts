import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {UserService} from "./user.service";
import {UserModel} from "../../models/UserModel";

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  private name$$: BehaviorSubject<string> = new BehaviorSubject<string>("")
  public name$ = this.name$$.asObservable();
  private isAdmin$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  public isAdmin$ = this.isAdmin$$.asObservable();

  constructor(private userService: UserService) {
  }

  getUser() {
    this.userService.getUser().then((res:any) => {
      console.log("res U: ", res?.successful)
        const user:UserModel = res.result
        this.name$$.next(user.name)
        this.isAdmin$$.next(user.role === 'admin')
    })
  }
}

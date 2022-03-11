import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {SessionStorageService} from "../../auth/services/session-storage.service";
import {Observable} from "rxjs";
import {UserModel} from "../../models/UserModel";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_GET_USER = "http://localhost:3000/users/me";

  constructor(private http: HttpClient, private router: Router, private sessionStorageService: SessionStorageService) {
  }

  getUser = async () => {
    return  await this.http.get(this.API_GET_USER).toPromise();
  }

  getUserOb(): Observable<UserModel>{
    return this.http.get<UserModel>(this.API_GET_USER)
  }
}

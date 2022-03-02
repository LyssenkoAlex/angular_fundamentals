import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class SessionStorageService {

  constructor() { }
  setToken(key:string, value:string) {
    sessionStorage.setItem(key, value)
  }

  getToken(key: string):string {
    const token = sessionStorage.getItem(key)
    return token == null ? "empty" : token
  }

  deleteToken(key:string) {
    sessionStorage.removeItem(key)
  }
}

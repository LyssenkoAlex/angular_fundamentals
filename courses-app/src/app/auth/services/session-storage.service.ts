import { Injectable } from '@angular/core';

@Injectable()
export class WindowRefService {
  get nativeWindow (): any {
    return getWindow();
  }
}

function getWindow (): any {
  return window;
}

export class SessionStorageService {

  constructor() { }
  setToken(key:string, value:string) {
    getWindow().localStorage.setItem(key, value)
  }

  getToken(key: string) {
    getWindow().localStorage.getItem(key)
  }

  deleteToken(key:string) {
    getWindow().localStorage.removeItem(key)
  }
}

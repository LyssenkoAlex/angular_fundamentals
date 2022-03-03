import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "./services/auth.service";
import {UserStoreService} from "../user/user-service/user-store.service";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private userService: UserStoreService,  private router: Router) {}
  isAdmin : boolean = false


  ngOnInit(): void {
    this.userService.isAdmin$.subscribe(data => this.isAdmin = data)
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('isAdmin: ' , this.isAdmin)
    return !this.isAdmin;
  }

}

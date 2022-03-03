import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "./services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthorizedGuard {

  isAuthorized : boolean = false
  constructor(private authService: AuthService,  private router: Router) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.authService.isAuthorized$.subscribe(data => this.isAuthorized = data)

    if(this.isAuthorized) {
      return true;
    }
    else {
      this.router.navigate(['/login']);
      return false
    }
  }
}

import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {Actions} from "../models/Actions";
import {CoursesStoreService} from "../services/courses-store.service";
import {AuthorsStoreService} from "../services/authors-store.service";

@Injectable({
  providedIn: 'root'
})
export class AuthorsResolverResolver implements Resolve<boolean> {

  constructor(private storeAuthors: AuthorsStoreService) {}


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.storeAuthors.processAction(Actions.INIT_AUTHORS, null)
    return of(true);
  }
}

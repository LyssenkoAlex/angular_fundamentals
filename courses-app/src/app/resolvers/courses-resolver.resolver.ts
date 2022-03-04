import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {Actions} from "../models/Actions";
import {CoursesStoreService} from "../services/courses-store.service";

@Injectable({
  providedIn: 'root'
})
export class CoursesResolverResolver implements Resolve<boolean> {

  constructor(private courseStore:CoursesStoreService) {}


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.courseStore.processAction(Actions.INIT_COURSES, null)
    return of(true);
  }
}

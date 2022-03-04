import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {Actions} from "../models/Actions";
import {AuthorsStoreService} from "../services/authors-store.service";

@Injectable({
  providedIn: 'root'
})
export class EditCourseResolverResolver implements Resolve<boolean> {

  constructor(private storeAuthor:AuthorsStoreService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.storeAuthor.processAction(Actions.ALL_AUTHORS, null)
    return of(true);
  }
}

import { Injectable } from '@angular/core';
import {createEffect, Actions, ofType, Effect} from '@ngrx/effects';
import {catchError, map, mergeMap, switchMap, tap} from 'rxjs/operators';
import { of } from 'rxjs';
import {
  CurrentUserTypes,
  requestCurrentUser,
  requestCurrentUserFail,
  requestCurrentUserSuccess,
  UserActions
} from "./user.actions";
import {UserService} from "../user-service/user.service";
import {UserModel} from "../../models/UserModel";

@Injectable()
export class RootEffects {

  /*
  To handle the behaviour of the Effect when different Action instances
  occurs on the same effect you can change mergeMap to other operators
  */
  constructor(private actions$: Actions, private userService: UserService) { }

  // effect from simulating an API call success
  @Effect()
  getUsers$ = this.actions$.pipe(
    ofType(CurrentUserTypes.RequestCurrentUser),
    switchMap((action:UserActions) =>
      this.userService.getUserOb().pipe(
        map((users: UserModel) => new requestCurrentUserSuccess(users)),
        catchError(error => of(new requestCurrentUserFail(error)))
      )
    )
  );


}

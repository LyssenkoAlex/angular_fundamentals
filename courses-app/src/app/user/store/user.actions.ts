import {Action, createAction, props} from "@ngrx/store";
import {UserModel} from "../../models/UserModel";


export enum CurrentUserTypes {
  RequestCurrentUser = "Request Current User",
  RequestCurrentUserSuccess = "Request Current User Success",
  RequestCurrentUserFail = "Request Current User Fail"
}



export class requestCurrentUser implements Action {
  readonly type = CurrentUserTypes.RequestCurrentUser;
}

export class requestCurrentUserSuccess implements Action {
  readonly type = CurrentUserTypes.RequestCurrentUserSuccess;
  constructor(public payload: UserModel) {}
}

export class requestCurrentUserFail implements Action {
  readonly type = CurrentUserTypes.RequestCurrentUserFail;
  constructor(public payload: any) {}
}
export type UserActions =
  | requestCurrentUser
  | requestCurrentUserSuccess
  | requestCurrentUserFail;

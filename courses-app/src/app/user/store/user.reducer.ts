import {CurrentUserTypes, UserActions} from "./user.actions";
import {UserModel} from "../../models/UserModel";

export interface UserState {
  isAdmin: boolean;
  name: string;
  user:UserModel
}

const initialState: UserState = {
  isAdmin: false,
  name:"",
  user:{name:"", email:"", password:"", role:""}
}

export function reducer(state = initialState, action:UserActions): UserState {
    switch (action.type) {
      case CurrentUserTypes.RequestCurrentUser: {
          return {
            ...state
          }
      }
      case CurrentUserTypes.RequestCurrentUserSuccess: {
        return {
          ...state,
          user:action.payload
        }
      }
      case CurrentUserTypes.RequestCurrentUserFail : {
        return {
          ...state,
          user:action.payload
        }
      }
      default: {
        return state
      }
    }

}

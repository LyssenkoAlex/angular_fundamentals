import {createSelector} from "@ngrx/store";
import {UserState} from "./user.reducer";
import {UserModel} from "../../models/UserModel";

const getName = (state:UserState):string => state.name
const isAdmin = (state:UserState):boolean => state.isAdmin
const user = (state:UserState):UserModel => state.user

export const getNameSelector = createSelector((state:any) => state.name, getName)
export const isAdminSelector = createSelector((state:any) => state.isAdmin, isAdmin)
export const getUser = createSelector((state:any) => state.user, user)

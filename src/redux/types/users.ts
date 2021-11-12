export interface userState {
  users: any[];
  error: string | null;
}

export interface objUser {
  id:number,
  name:string,
  vaccinate:boolean
}

export enum userActionTypes {
  ADD_USERS_FULFILLED = "ADD_USERS_FULFILLED",
  EDIT_USER_FULFILLED = 'EDIT_USER_FULFILLED',
  USER_DELETE = "USER_DELETE",
  CHANGE_VACCINATE = "CHANGE_VACCINATE"
}
type objVaccineEdit = {
  id:number,
  vaccine:boolean
}
type objUserEdit = {
  id:number,
  name:string
}

type objAddUser = {
  name:string,
  check:boolean
}

interface editVaccinate {
  type:userActionTypes.CHANGE_VACCINATE,
  payload:objVaccineEdit
}
interface editUser {
  type:userActionTypes.EDIT_USER_FULFILLED,
  payload:objUserEdit
}
interface addUserFulfilled {
  type: userActionTypes.ADD_USERS_FULFILLED;
  payload: objAddUser;
}

interface deleteUser {
  type:userActionTypes.USER_DELETE;
  payload:number
}

export type userAction = addUserFulfilled | editUser | deleteUser | editVaccinate

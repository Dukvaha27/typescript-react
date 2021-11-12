import {combineReducers} from "redux";
import {usersReducer} from "./users";


export const Reducers = combineReducers({
    users:usersReducer,
})

export type rootState = ReturnType<typeof Reducers>
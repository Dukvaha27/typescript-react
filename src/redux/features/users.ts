import {Dispatch} from "redux";
import {userAction, userActionTypes, userState} from "../types/users";

const initialState: userState = {
  users: [
    {
      id: 1,
      name: "Dukvakha",
      vaccinate:true
    },
    {
      id: 2,
      name: "Amir",
      vaccinate: true
    },
  ],
  error: null,
};

export const usersReducer = (
  state = initialState,
  action: userAction
): userState => {
  switch (action.type) {
    case userActionTypes.ADD_USERS_FULFILLED:
      return {
        ...state,
        users: [
          ...state.users,
          { id: state.users.length+1, name: action.payload.name, vaccinate:action.payload.check },
        ],
      };
    case userActionTypes.EDIT_USER_FULFILLED:
      return{
        ...state,
        users:state.users.map(item => {
          if (item.id === action.payload.id){
            return{
              ...item,
              name:action.payload.name
            }
          }
          return item
        })
      };
    case userActionTypes.USER_DELETE:
      return {
        ...state,
        users:state.users.filter(item => {
          if (item.id !== action.payload){
            return item
          }
        })
      }
    case userActionTypes.CHANGE_VACCINATE:
      return {
        ...state,
        users:state.users.map(user => {
          if (user.id === action.payload.id){
            return{
              ...user,
              vaccinate:!action.payload.vaccine
            }
          }
          return user
        })
      }
    default:
      return state;
  }
};

export const addUser = (name: string,check:boolean) => {
  return (dispatch: Dispatch<userAction>) => {
    dispatch({ type: userActionTypes.ADD_USERS_FULFILLED, payload: {name,check} });
  };
};

export const editUser = (name:string,id:number) => {
  return (dispatch:Dispatch<userAction>) => {
    dispatch({type:userActionTypes.EDIT_USER_FULFILLED,payload: {name,id}})
  }
}

export const deleteUser = (id:number) => {
  return (dispatch:Dispatch<userAction>) => {
    dispatch({type:userActionTypes.USER_DELETE,payload:id})
  }
}

export const changeVaccinate = (id:number,vaccine:boolean) => {
  return (dispatch:Dispatch<userAction>) => {
    dispatch({type:userActionTypes.CHANGE_VACCINATE,payload: {id, vaccine}})
  }
}

import {applyMiddleware, createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {Reducers} from "./features";

export const store = createStore(
  Reducers,
  composeWithDevTools(applyMiddleware(thunk))
)
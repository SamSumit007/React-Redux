import { applyMiddleware, legacy_createStore as createStore } from "redux"
import { combineReducers } from 'redux'

import { registerReducer } from "./register/reducer"
import thunk from "redux-thunk"
import { isLoggedReducer } from "./login/loginReducer"
export const rootReducer= combineReducers({
  reg:registerReducer,
  token : isLoggedReducer
})
export const store = createStore(rootReducer,
  applyMiddleware(thunk)
    //  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)
  console.log(store.getState())
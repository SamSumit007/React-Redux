const init = {
    tok: null
}
import {isAuth} from "./action"
export const isAuthReducer = (store= init, {type, payload}) => {
    switch (type) {
        case isAuth:
            return {...store, tok: payload}
        default:
            return store
    }
}
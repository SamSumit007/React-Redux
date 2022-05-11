const init = { error: true}
import { register } from "./action"
export const registerReducer = (store = init, {type, payload}) => {
    switch (type) {
        
        case register:
            return { ...store, error: payload }
        default:
            return store
    }
        
}
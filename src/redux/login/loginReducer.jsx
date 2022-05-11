import { isLogged } from "./loginAction"
const init = {tok: null}
export const isLoggedReducer = (store = init, { type, payload }) => {
    switch (type) {
        case isLogged:
            return { ...store, tok: payload }
        default:
            return store
    }
}
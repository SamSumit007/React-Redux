import axios from "axios"

//action type
export const isLogged = "isLogged"
export const isLoggedAction = (data) => {
    return {
        type: isLogged,
        payload : data
    }
}

export const loginFn = (data) => (dispatch) => {
    axios.post("https://masai-api-mocker.herokuapp.com/auth/login", data).then((res) => {
        dispatch(isLoggedAction(res.data.token))
        console.log("login data fetched")
    })
}
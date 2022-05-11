import history from "../history"
import axios from "axios"
//action type
export const register = "REGISTER"
//action creqater
export const registerUser = (data) => {
    return {
        type: register,
        payload: data
    }
}


export const postData = (data) => (dispatch) => {
    axios.post("https://masai-api-mocker.herokuapp.com/auth/register", data).then((res) => {
        console.log(res)
        dispatch(registerUser(res.data.error))
        // history.push("/login")
        // window.location.reload()
    })
}
import * as actions from "./actionTypes";
import { auth } from "../../firebase";


const initialState = JSON.parse(localStorage.getItem("Auth")) || {}

export default function AuthReducer(state = initialState, action) {
    if (action.type === actions.EMAIL_SIGNUP) {
        const { email, password } = action.payload
        const data = auth.createUserWithEmailAndPassword(email, password);
    } else if (action.type === actions.LOGIN) {
        localStorage.setItem("Auth", JSON.stringify(action.payload))
        return {
            ...state, ...action.payload
        }
    } else if (action.type === actions.EMAIL_SIGNIN) {
        return state
    } else if (action.type === actions.EMAIL_SIGNOUT) {
        return state
    } else if (action.type === actions.GOOGLE_SIGNIN) {
        return state
    } else {
        return state
    }
}

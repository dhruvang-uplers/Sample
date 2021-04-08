import * as actions from "./actionTypes";

export default function AuthReducer(state = [], action) {
    if (action.type === actions.EMAIL_SIGNUP) {
        console.log("EMAIL_SIGNUP");
    } else if (action.type === actions.EMAIL_SIGNIN) {
        console.log("EMAIL_SIGNIN");
    } else if (action.type === actions.EMAIL_SIGNOUT) {
        console.log("EMAIL_SIGNOUT");
    } else if (action.type === actions.GOOGLE_SIGNIN) {
        console.log("GOOGLE_SIGNIN");
    } else {
        console.log(state);
    }
    return state
}

import * as actions from "./actionTypes";
import { auth } from "../../firebase";

export default function AuthReducer(state = [], action) {
    if (action.type === actions.EMAIL_SIGNUP) {
        console.log("EMAIL_SIGNUP");
        const { email, password } = action.payload
        const data = auth.createUserWithEmailAndPassword(email, password);
        console.log(data);

    } else if (action.type === actions.EMAIL_SIGNIN) {
        console.log("EMAIL_SIGNIN");
        const { email, password } = action.payload
        auth.signInWithEmailAndPassword(email, password).then((userCredential) => {
            var user = userCredential.user;
            console.log(user);

            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false
                }
            ]


        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error({ errorCode, errorMessage });
        });

    } else if (action.type === actions.EMAIL_SIGNOUT) {
        console.log("EMAIL_SIGNOUT");
    } else if (action.type === actions.GOOGLE_SIGNIN) {
        console.log("GOOGLE_SIGNIN");
    } else {
        console.log(state);
    }
    return state
}

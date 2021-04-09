import * as actions from "./actionTypes";
import { auth } from "../../firebase";


const initialState = {
    uid: null,
    username: null,
    email: null,
    refreshToken: null,
    avatar: null,
    state: null
}


export default function AuthReducer(state = initialState, action) {
    if (action.type === actions.EMAIL_SIGNUP) {
        const { email, password } = action.payload
        const data = auth.createUserWithEmailAndPassword(email, password);
        console.log(data);

    } else if (action.type === actions.EMAIL_SIGNIN) {
        const { email, password } = action.payload

        auth.signInWithEmailAndPassword(email, password).then((userCredential) => {
            var user = userCredential.user;
            console.log({
                uid: user.uid,
                username: user.displayName,
                email: user.email,
                refreshToken: user.refreshToken,
                avatar: user.photoURL,
                state: state
            });
            // return state;
            return {
                uid: user.uid,
                username: user.displayName,
                email: user.email,
                refreshToken: user.refreshToken,
                avatar: user.photoURL
            }
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error({ errorCode, errorMessage });
        });

    } else if (action.type === actions.EMAIL_SIGNOUT) {
        return state
    } else if (action.type === actions.GOOGLE_SIGNIN) {
        return state
    } else {
        return state
    }
}

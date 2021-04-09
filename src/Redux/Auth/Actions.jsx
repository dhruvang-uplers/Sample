export const login = data => ({
    type: "LOGIN",
    payload: data
})
export const emailSignup = (email, password) => ({
    type: "EMAIL_SIGNUP",
    payload: { email, password }
})
export const emailSignin = (email, password) => ({
    type: "EMAIL_SIGNIN",
    payload: { email, password }
})

export const emailSignout = id => ({
    type: "EMAIL_SIGNOUT",
    payload: { id }
})

export const googleSignin = id => ({
    type: "GOOGLE_SIGNIN",
    payload: { id }
})
export const emailSignup = (description) => ({
    type: "EMAIL_SIGNUP",
    payload: { description }
})

export const emailSignin = id => ({
    type: "EMAIL_SIGNIN",
    payload: { id }
})

export const emailSignout = id => ({
    type: "EMAIL_SIGNOUT",
    payload: { id }
})

export const googleSignin = id => ({
    type: "GOOGLE_SIGNIN",
    payload: { id }
})



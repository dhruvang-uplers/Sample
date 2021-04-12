const initialState = {
    isLogin: false
}

export const Reducer= (state = initialState, { type, payload }) => {
    console.log(type);
    switch (type) {
       
        case "Sign_in":
            console.log(payload);
            return { ...state, isLogin:true,...payload }
        case "Sign_in":
            console.log(payload);
            return { ...state, isLogin:false,...payload }
        default:
            return state
    }
}

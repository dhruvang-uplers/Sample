const initialState = {
    signin: false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        // case Sign_in:
        //     console.log(payload)
        //     return { ...state, ...payload }

        default:
            return state
    }
}

const { GET_USER_INFO_REQUEST, GET_USER_INFO_SUCCESS, GET_USER_INFO_FAIL } = require("../types")

const initialState = {
    request: false,
    info: [],
    error: ''
}

export const getProfileInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_INFO_REQUEST:
            return{
                ...state,
                request: true,
            }
        case GET_USER_INFO_SUCCESS:
            return{
                ...state,
                info: action.payload,
                request: false
            }
        case GET_USER_INFO_FAIL:
            return{
                ...state,
                request: false,
                error: action.payload
            }
        default:
            return state
    }
}
import { AUTORIZE_FAIL, AUTORIZE_REQUEST, AUTORIZE_SUCCESS } from "../types"

const initialState = {
    request: false,
    name: '',
    error: '',
    tokken: ''
}

export const autorizeReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTORIZE_REQUEST:
            return{
                ...state,
                request: true,
                error: '',
            }
        case AUTORIZE_SUCCESS:
            return{
                ...state,
                request: false,
                name: action.payload
            }
        case AUTORIZE_FAIL:
            return{
                ...state,
                request: false,
                error: action.payload
            }
        default:
            return state
    }
}
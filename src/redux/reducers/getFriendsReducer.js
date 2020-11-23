import { GET_FRIENDS_FAIL, GET_FRIENDS_REQUEST, GET_FRIENDS_SUCCESS } from "../types"

const initialState = {
    isFetching: false,
    friends: [],
    error: ''
}

export const getFriendsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_FRIENDS_REQUEST:
            return{
                ...state,
                isFetching: true
            }
        case GET_FRIENDS_SUCCESS:
            return{
                ...state,
                friends: action.payload,
                isFetching: false,
            }
        case GET_FRIENDS_FAIL:
            return{
                ...state,
                isFetching: false,
                error: action.payload
            }
        default: return state
    }
}
import { GET_SAVED_PHOTOS_FAIL, GET_SAVED_PHOTOS_REQUEST, GET_SAVED_PHOTOS_SUCCESS } from "../types"

const initialState = {
    request: false,
    photos: [],
    error: ''
}

export const getSavedPhotosReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SAVED_PHOTOS_REQUEST:
            return{
                ...state,
                request: true,
                error:''
            }
        case GET_SAVED_PHOTOS_SUCCESS:
            return{
                ...state,
                request: false,
                photos: action.payload
            }
        case GET_SAVED_PHOTOS_FAIL:
            return{
                ...state,
                request: false,
                error: action.payload
            }
        default:
            return state
    }
}
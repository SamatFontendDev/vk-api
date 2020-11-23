import { GET_PROFILE_PHOTOS_FAIL, GET_PROFILE_PHOTOS_REQUEST, GET_PROFILE_PHOTOS_SUCCESS } from "../types"

const initialState = {
    request: false,
    photos: [],
    error: ''
}

export const getProfilePhotosReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PROFILE_PHOTOS_REQUEST:
            return{
                ...state,
                request: true,
                error:''
            }
        case GET_PROFILE_PHOTOS_SUCCESS:
            return{
                ...state,
                request: false,
                photos: action.payload
            }
        case GET_PROFILE_PHOTOS_FAIL:
            return{
                ...state,
                request: false,
                error: action.payload
            }
        default:
            return state
    }
}
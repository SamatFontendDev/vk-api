import { GET_WALL_PHOTOS_FAIL, GET_WALL_PHOTOS_REQUEST, GET_WALL_PHOTOS_SUCCESS } from "../types"

const initialState = {
    request: false,
    photos: [],
    error: ''
}

export const getWallPhotosReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_WALL_PHOTOS_REQUEST:
            return{
                ...state,
                request: true,
                error:''
            }
        case GET_WALL_PHOTOS_SUCCESS:
            return{
                ...state,
                request: false,
                photos: action.payload
            }
        case GET_WALL_PHOTOS_FAIL:
            return{
                ...state,
                request: false,
                error: action.payload
            }
        default:
            return state
    }
}
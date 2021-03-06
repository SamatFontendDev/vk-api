import { GET_SAVED_PHOTOS_FAIL, GET_SAVED_PHOTOS_REQUEST, GET_SAVED_PHOTOS_SUCCESS } from "../types";

const VK = window.VK;

export const getSavedPhotosAction = () => {
    return dispatch => {
        try {
            dispatch({
                type: GET_SAVED_PHOTOS_REQUEST
            })
            VK.api("photos.get", {extended: 1, album_id: 'saved', v: '5.80'}, r => {
                console.log(r.response.items);
                dispatch({
                    type: GET_SAVED_PHOTOS_SUCCESS,
                    payload: r.response.items
                })
            });

        } catch (error) {
            dispatch({
                type: GET_SAVED_PHOTOS_FAIL,
                payload: error
            })
        }
    }
}
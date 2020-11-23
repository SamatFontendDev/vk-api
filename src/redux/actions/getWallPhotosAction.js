import { GET_WALL_PHOTOS_FAIL, GET_WALL_PHOTOS_REQUEST, GET_WALL_PHOTOS_SUCCESS } from "../types";

const VK = window.VK;

export const getWallPhotosAction = () => {
    return dispatch => {
        try {
            dispatch({
                type: GET_WALL_PHOTOS_REQUEST
            })
            VK.api("photos.get", {extended: 1, album_id: 'wall', v: '5.80'}, r => {
                console.log(r.response.items);
                dispatch({
                    type: GET_WALL_PHOTOS_SUCCESS,
                    payload: r.response.items
                })
            });

        } catch (error) {
            dispatch({
                type: GET_WALL_PHOTOS_FAIL,
                payload: error
            })
        }
    }
}
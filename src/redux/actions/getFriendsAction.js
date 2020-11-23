import { GET_FRIENDS_FAIL, GET_FRIENDS_REQUEST, GET_FRIENDS_SUCCESS } from "../types";

const VK = window.VK;

export const getFriendsAction = () => {
    return dispatch => {
        try {
            dispatch({
                type: GET_FRIENDS_REQUEST
            })
            VK.api('friends.get', {order: 'hints', count: 50, fields: ['nickname', 'domain', 'photo_100', 'online', 'photo_200_orig', 'domain'], v: '5.80' },  r => {
                console.log(r.response.items);
                dispatch({
                    type: GET_FRIENDS_SUCCESS,
                    payload: r.response.items
                })
            })
        } catch (error) {
            dispatch({
                type: GET_FRIENDS_FAIL,
                payload: error
            })
        }
    }
}
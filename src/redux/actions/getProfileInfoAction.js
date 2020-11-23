import { GET_USER_INFO_FAIL, GET_USER_INFO_REQUEST, GET_USER_INFO_SUCCESS } from "../types";

const VK = window.VK;

export const getProfileInfoAction = id => {
    return dispatch => {
        try {
            dispatch({
                type: GET_USER_INFO_REQUEST
            })
            VK.api('users.get', {
                name_case: 'Nom',
                user_ids: id,
                fields: ['photo_max_orig', 'online'], 
                v: '5.80' },
                r => {
                    console.log(r.response);
                    dispatch({
                        type: GET_USER_INFO_SUCCESS,
                        payload: r.response
                    })
                }
                )
        } catch (error) {
            dispatch({
                type: GET_USER_INFO_FAIL,
                payload: error
            })
        }
    }
}
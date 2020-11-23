import { AUTORIZE_FAIL, AUTORIZE_REQUEST, AUTORIZE_SUCCESS } from "../types";

const VK = window.VK;


export const handleLogin = () => {
  return function(dispatch) {
      dispatch({
        type: AUTORIZE_REQUEST
      })
  
      VK.Auth.login(r => {
        if (r.session) {
          console.log(r.session);
          let username = r.session.user.first_name
  
          dispatch({
            type: AUTORIZE_SUCCESS,
            payload: username
          })
        } else {
          dispatch({
            type: AUTORIZE_FAIL,
            error: true,
            payload:'Ошибка авторизации'
          })
        }
      }, 4)
    }
  }
import axios from 'axios';

import * as actionTypes from './types';

export function authStart() {
  return {
    type: actionTypes.AUTH_START
  };
}

export function authSuccess(authData) {
  return {
    type: actionTypes.AUTH_SUCCESS,
    authData
  };
}

export function authFail(error) {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
}

export function auth(email, password) {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email,
      password,
      returnSecureToken: true
    };
    axios
      .post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAt96XO_suTxCt7bX-AD6hL2ijjWN7j18A',
        authData
      )
      .then(res => {
        console.log(res);
        dispatch(authSuccess(res.data));
      })
      .catch(err => dispatch(authFail(err)));
  };
}

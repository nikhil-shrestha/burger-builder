import axios from 'axios';

import * as actions from './types';

export function authStart() {
  return {
    type: actions.AUTH_START
  };
}

export function authSuccess(idToken, userId) {
  return {
    type: actions.AUTH_SUCCESS,
    idToken,
    userId
  };
}

export function authFail(error) {
  return {
    type: actions.AUTH_FAIL,
    error
  };
}

export function auth(email, password, isSignUp) {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email,
      password,
      returnSecureToken: true
    };
    let url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAt96XO_suTxCt7bX-AD6hL2ijjWN7j18A';
    if (!isSignUp) {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAt96XO_suTxCt7bX-AD6hL2ijjWN7j18A';
    }
    axios
      .post(url, authData)
      .then(res => {
        console.log(res);
        dispatch(authSuccess(res.data.idToken, res.data.localId));
      })
      .catch(err => {
        console.log(err);
        dispatch(authFail(err));
      });
  };
}

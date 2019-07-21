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

export function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('expireDate');
  localStorage.removeItem('userId');
  return {
    type: actions.AUTH_LOGOUT
  };
}

export function checkAuthTimeout(expirationTime) {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
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
        const expirationDate = new Date(
          new Date().getTime() + res.data.expiresIn * 1000
        );
        localStorage.setItem('token', res.data.idToken);
        localStorage.setItem('expireDate', expirationDate);
        localStorage.setItem('userId', res.data.localId);
        dispatch(authSuccess(res.data.idToken, res.data.localId));
        dispatch(checkAuthTimeout(res.data.expiresIn));
      })
      .catch(err => {
        console.log(err);
        dispatch(authFail(err.response.data.error));
      });
  };
}

export function setAuthRedirectPath(path) {
  return {
    type: actions.SET_AUTH_REDIRECT_PATH,
    path
  };
}

export function authCheckState() {
  return dispatch => {
    const token = localStorage.getItem('token');
    if (!token) {
      dispatch(logout());
    } else {
      const expire = new Date(localStorage.getItem('expireDate'));
      if (expire <= new Date()) {
        dispatch(logout());
      } else {
        const userId = localStorage.getItem('userId');
        dispatch(authSuccess(token, userId));
        dispatch(
          checkAuthTimeout((expire.getTime() - new Date().getTime()) / 1000)
        );
      }
    }
  };
}

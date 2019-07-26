import * as types from './types';

export function authStart() {
  return {
    type: types.AUTH_START
  };
}

export function authSuccess(idToken, userId) {
  return {
    type: types.AUTH_SUCCESS,
    idToken,
    userId
  };
}

export function authFail(error) {
  return {
    type: types.AUTH_FAIL,
    error
  };
}

export function logout() {
  // localStorage.removeItem('token');
  // localStorage.removeItem('expireDate');
  // localStorage.removeItem('userId');
  return {
    type: types.AUTH_INITIATE_LOGOUT
  };
}

export function logoutSucceed() {
  return {
    type: types.AUTH_LOGOUT
  };
}

export function checkAuthTimeout(expirationTime) {
  // return dispatch => {
  //   setTimeout(() => {
  //     dispatch(logout());
  //   }, expirationTime * 1000);
  // };

  return {
    type: types.AUTH_CHECK_TIMEOUT,
    expirationTime: expirationTime
  };
}

export function auth(email, password, isSignUp) {
  return {
    type: types.AUTH_USER,
    email,
    password,
    isSignUp
  };
}

export function setAuthRedirectPath(path) {
  return {
    type: types.SET_AUTH_REDIRECT_PATH,
    path
  };
}

export function authCheckState() {
  return {
    type: types.AUTH_CHECK_STATE
  };
}

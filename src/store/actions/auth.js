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
  };
}

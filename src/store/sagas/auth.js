import { delay } from 'redux-saga/effects';
import { put } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../actions/index';

export function* logoutSaga(action) {
  yield localStorage.removeItem('token');
  yield localStorage.removeItem('expireDate');
  yield localStorage.removeItem('userId');
  yield put(actions.logoutSucceed());
}

export function* checkAuthTimeoutSaga(action) {
  yield delay(action.expirationTime * 1000);
  yield put(actions.logout());
}

export function* authUserSaga(action) {
  yield put(actions.authStart());
  const authData = {
    email: action.email,
    password: action.password,
    returnSecureToken: true
  };
  let url =
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAt96XO_suTxCt7bX-AD6hL2ijjWN7j18A';
  if (!action.isSignUp) {
    url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAt96XO_suTxCt7bX-AD6hL2ijjWN7j18A';
  }
  try {
    const res = yield axios.post(url, authData);
    const expirationDate = new Date(
      new Date().getTime() + res.data.expiresIn * 1000
    );
    yield localStorage.setItem('token', res.data.idToken);
    yield localStorage.setItem('expireDate', expirationDate);
    yield localStorage.setItem('userId', res.data.localId);
    yield put(actions.authSuccess(res.data.idToken, res.data.localId));
    yield put(actions.checkAuthTimeout(res.data.expiresIn));
  } catch (err) {
    yield put(actions.authFail(err.response.data.error));
  }
}

export function* authCheckStateSaga(action) {
  const token = yield localStorage.getItem('token');
  if (!token) {
    yield put(actions.logout());
  } else {
    const expire = yield new Date(localStorage.getItem('expireDate'));
    if (expire <= new Date()) {
      yield put(actions.logout());
    } else {
      const userId = localStorage.getItem('userId');
      yield put(actions.authSuccess(token, userId));
      yield put(
        actions.checkAuthTimeout(
          (expire.getTime() - new Date().getTime()) / 1000
        )
      );
    }
  }
}

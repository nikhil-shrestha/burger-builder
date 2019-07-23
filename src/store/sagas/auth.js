import { put } from 'redux-saga/effects';

import * as actions from '../actions/types';

export function* logoutSaga(action) {
  yield localStorage.removeItem('token');
  yield localStorage.removeItem('expireDate');
  yield localStorage.removeItem('userId');
  yield put({
    type: actions.AUTH_LOGOUT
  });
}

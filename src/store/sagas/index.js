import { takeEvery } from 'redux-saga/effects';

import * as actions from '../actions/types';
import { logoutSaga, checkAuthTimeoutSaga, authUserSaga } from './auth';

export function* watchAuth() {
  yield takeEvery(actions.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
  yield takeEvery(actions.AUTH_INITIATE_LOGOUT, logoutSaga);
  yield takeEvery(actions.AUTH_USER, authUserSaga);
}

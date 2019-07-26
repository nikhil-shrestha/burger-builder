import { takeEvery } from 'redux-saga/effects';

import * as actions from '../actions/types';
import { logoutSaga, checkAuthTimeoutSaga } from './auth';

export function* watchAuth() {
  yield takeEvery(actions.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
  yield takeEvery(actions.AUTH_INITIATE_LOGOUT, logoutSaga);
}

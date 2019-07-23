import { takeEvery } from 'redux-saga/effects';

import * as actions from '../actions/types';
import { logoutSaga } from './auth';

export function* watchAuth() {
  yield takeEvery(actions.AUTH_INITIATE_LOGOUT, logoutSaga);
}

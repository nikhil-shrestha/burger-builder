import { put } from 'redux-saga';

import * as actions from '../actions/types';

function* logout(action) {
  yield localStorage.removeItem('token');
  yield localStorage.removeItem('expireDate');
  yield localStorage.removeItem('userId');
  put({
    type: actions.AUTH_LOGOUT
  });
}

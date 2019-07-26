import { put } from 'redux-saga/effects';

import axios from '../../axios-orders';
import * as actions from '../actions/index';

export function* initIngridientsSaga(action) {
  const res = yield axios.get('/ingredients.json');
  try {
    yield put(actions.setIngridient(res.data));
  } catch (err) {
    yield put(actions.fetchIngridientsFailed());
  }
}

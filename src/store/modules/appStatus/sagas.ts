/* eslint-disable import/prefer-default-export */
import { put, call } from 'redux-saga/effects';
import FetchAPI from 'src/services/FetchApi';
import { setAppStatus } from './actions';

export function* getAppStatusFromApi() {
  try {
    const response: Response = yield call(FetchAPI.get, '/status');
    yield put(setAppStatus(response.ok));
  } catch {
    yield put(setAppStatus(false));
  }
}

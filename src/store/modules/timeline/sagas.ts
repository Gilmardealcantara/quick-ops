/* eslint-disable import/prefer-default-export */
import { put, call } from 'redux-saga/effects';
import { API_URL } from 'src/utils/constants';
import FetchAPI, { FetchApiResponse } from 'src/services/FetchApi';
import { setTimelineData, setTimelineError } from './actions';

export function* loadTimelineDataFromApi() {
  try {
    const fetchApi = new FetchAPI(API_URL);
    const response: FetchApiResponse = yield call(fetchApi.get.bind(fetchApi), '/timeline');
    if (!response.error) {
      yield put(setTimelineData(response.data?.content));
    } else {
      yield put(setTimelineError(response.error.statusText));
    }
  } catch (error) {
    yield put(setTimelineError('-1'));
  }
}

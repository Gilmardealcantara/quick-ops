import { call } from 'redux-saga/effects';
import { loadTimelineDataFromApi } from '../../../store/modules/timeline/sagas';
import FetchApi from '../../../services/FetchApi';

describe('Timeline', () => {
  test('loadHeaderDataFromApi', () => {
    const gen = loadTimelineDataFromApi();

    expect(gen.next().value).toEqual(call(FetchApi.get, '/timeline'));
  });
});

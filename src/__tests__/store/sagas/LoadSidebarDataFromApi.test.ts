import { call } from 'redux-saga/effects';
import { loadSidebarDataFromApi } from '../../../store/modules/sidebarData/sagas';
import FetchApi from '../../../services/FetchApi';

describe('Sidebar Data', () => {
  test('loadHeaderDataFromApi', () => {
    const gen = loadSidebarDataFromApi();

    expect(gen.next().value).toEqual(call(FetchApi.get, '/sidebar'));
  });
});

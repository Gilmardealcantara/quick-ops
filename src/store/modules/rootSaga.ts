import { all, takeLatest } from 'redux-saga/effects';

import { AppStatusTypes } from './appStatus/types';
import { getAppStatusFromApi } from './appStatus/sagas';

import { HeaderDataTypes } from './headerData/types';
import { loadHeaderDataFromApi } from './headerData/sagas';

import { TimelineTypes } from './timeline/types';
import { loadTimelineDataFromApi } from './timeline/sagas';

import { SideBarDataTypes } from './sidebarData/types';
import { loadSidebarDataFromApi } from './sidebarData/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(AppStatusTypes.GET, getAppStatusFromApi),
    takeLatest(HeaderDataTypes.LOAD, loadHeaderDataFromApi),
    takeLatest(TimelineTypes.LOAD, loadTimelineDataFromApi),
    takeLatest(SideBarDataTypes.LOAD, loadSidebarDataFromApi),
  ]);
}

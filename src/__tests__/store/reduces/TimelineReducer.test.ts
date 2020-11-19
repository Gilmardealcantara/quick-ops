import { mock } from 'jest-mock-extended';
import timeline from '../../../store/modules/timeline';
import {
  loadTimeLineData,
  setTimelineData,
  setTimelineError,
  addNewExpense,
} from '../../../store/modules/timeline/actions';
import { TimelineItem } from '../../../store/modules/timeline/types';

describe('Timeline Reducer', () => {
  test('return initial state when action not exists and state is undefined', () => {
    const action = { type: 'dummy_action' };
    const result = timeline(undefined, action);
    expect(result).toEqual({ loading: false, data: [] });
  });

  test('return current state action not exits', () => {
    const action = { type: 'dummy_action' };
    const testState = { loading: false, data: [] };
    const result = timeline(testState, action);
    expect(result).toEqual(testState);
  });

  test('load data from api', () => {
    const expectedState = { loading: true, data: [] };
    const result = timeline(undefined, loadTimeLineData());
    expect(result).toEqual(expectedState);
  });

  test('set state Success', () => {
    const timelineDataMock = mock<TimelineItem>();

    const result = timeline(undefined, setTimelineData([timelineDataMock]));

    expect(result.data).toEqual([timelineDataMock]);
    expect(result.error).toBeUndefined();
    expect(result.loading).toBeFalsy();
  });

  test('set state Error', () => {
    const result = timeline(undefined, setTimelineError('InternalServerError'));

    expect(result.error).toEqual({ status: 'InternalServerError' });
    expect(result.data).toEqual([]);
    expect(result.loading).toBeFalsy();
  });

  test('add new expense timeline item ', () => {
    const timelineDataMock = mock<TimelineItem>();

    const result = timeline(undefined, addNewExpense(timelineDataMock));

    expect(result.data).toContain(timelineDataMock);
    expect(result.error).toBeUndefined();
    expect(result.loading).toBeFalsy();
  });
});

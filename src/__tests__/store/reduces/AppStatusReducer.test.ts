import appStatus from '../../../store/modules/appStatus';
import { getAppStatus, setAppStatus } from '../../../store/modules/appStatus/actions';

describe('appStatus Reducer', () => {
  test('return initial state when action not exists and state is undefined', () => {
    const action = { type: 'dummy_action' };
    const result = appStatus(undefined, action);
    expect(result).toEqual({ loading: false });
  });

  test('return current state action not exits', () => {
    const action = { type: 'dummy_action' };
    const testState = { loading: false, ok: false };
    const result = appStatus(testState, action);
    expect(result).toEqual(testState);
  });

  [true, false].forEach((status) => {
    test(`set state to ${status}`, () => {
      const expectedState = { loading: false, ok: status };
      const result = appStatus(undefined, setAppStatus(status));
      expect(result).toEqual(expectedState);
    });
  });

  test('get state from api', () => {
    const expectedState = { loading: true };
    const result = appStatus(undefined, getAppStatus());
    expect(result).toEqual(expectedState);
  });
});

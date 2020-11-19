import appStatus from '../../../store/modules/appStatus';
import { getAppStatus, setAppStatus } from '../../../store/modules/appStatus/actions';

describe('INITIAL_STATE', () => {
  test('is correct', () => {
    const action = { type: 'dummy_action' };
    const result = appStatus(undefined, action);
    expect(result).toEqual({ loading: false });
  });
});

describe('@AppStatus/SET', () => {
  [true, false].forEach((status) => {
    test(`status to ${status}`, () => {
      const expectedState = { loading: false, ok: status };
      const result = appStatus(undefined, setAppStatus(status));
      expect(result).toEqual(expectedState);
    });
  });
});

describe('@AppStatus/GET', () => {
  test('status to true', () => {
    const expectedState = { loading: true };
    const result = appStatus(undefined, getAppStatus());
    expect(result).toEqual(expectedState);
  });
});

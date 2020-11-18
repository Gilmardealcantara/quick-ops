import { Reducer } from 'redux';
import { TimelineState, TimelineTypes } from './types';

export const INITIAL_STATE: TimelineState = {
  loading: false,
  data: [],
};

const reducer: Reducer<TimelineState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TimelineTypes.LOAD:
      return { ...state, loading: true, error: undefined };
    case TimelineTypes.SET_DATA:
      return {
        ...state,
        loading: false,
        error: undefined,
        data: action.payload,
      };
    case TimelineTypes.SET_ERROR:
      return {
        ...state,
        loading: false,
        error: { status: action.payload },
        data: [],
      };
    case TimelineTypes.ADD_EXPENSE:
      return { ...state, data: [action.payload, ...state.data] };
    default:
      return state;
  }
};

export default reducer;

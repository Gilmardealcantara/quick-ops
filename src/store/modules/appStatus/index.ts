import { Reducer } from 'redux';
import { AppStatusState, AppStatusTypes } from './types';

export const INITIAL_STATE: AppStatusState = {
    loading: false,
};

const reducer: Reducer<AppStatusState> = ( state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case AppStatusTypes.GET:
          return { ...state, loading: true };
        case AppStatusTypes.SET:
          return { ...state, loading: false, ok: action.payload };
        default:
            return state;
    }
}

export default reducer;
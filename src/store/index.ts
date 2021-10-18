import { combineReducers } from 'redux';

import applicationReducer, { initialState as applicationState } from './application/reducers';

export const rootReducer = combineReducers({
  application: applicationReducer,
});

const State = {
  application: applicationState,
};

export type RootState = typeof State;

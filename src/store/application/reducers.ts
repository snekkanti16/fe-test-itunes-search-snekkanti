import * as types from './types';

export const initialState: types.ApplicationState = {
  ituneResults:[]
};

const applicationReducer = (state = initialState, action: types.ApplicationsActionTypes) => {
  switch (action.type) {
    case types.GET_ITUNE_RESULTS:
      return { ...state, ituneResults: action.ituneResults };  
    default:
      return state;
  }
};

export default applicationReducer;

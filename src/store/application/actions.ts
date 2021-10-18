import * as types from './types';


/**
 * Sets the itunes Results provided to the Redux Store.
 * @param ituneResults 
 */
 export const setItuneResults = (ituneResults : types.ItuneResults) => {
  return { 
    type: types.GET_ITUNE_RESULTS, 
    ituneResults: ituneResults }
}
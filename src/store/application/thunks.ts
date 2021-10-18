import { AppThunk } from '../store';
import axios from 'axios';
import * as actions from './actions';
import * as types from './types';

export const thunkGetItunesResult = (name : String) : AppThunk => {
    return async (dispatch, getState) => {
      try { 
        if(name){
        const res = await axios.get('https://itunes.apple.com/search?term='+name+'&entity=musicTrack,album&limit=200');
        const ituneResponse : types.ituneResponse = res.data as types.ituneResponse;
        const ituneResults : types.ItuneResults = ituneResponse.results;
        const updatedItuneResults : types.ItuneResults = ituneResults.map((ituneResult, index) => ({...ituneResult, key : ituneResult.wrapperType + index}));
        dispatch(actions.setItuneResults(updatedItuneResults));
        }
      } catch (e){
        // To Do Handle Exceptions
        console.error("Error Getting iTunes Search Result");
      }
  };
}

import { createStore, applyMiddleware, Action } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { ThunkAction } from 'redux-thunk';

import { rootReducer, RootState } from './index';

/**
 * Exports a dev-tools wrapped version of the application if in development, otherwise bundles any
 * required middleware into the application and returns a built Redux store.
 *
 * @param {string} apiUrl URL of the API to query.
 */
export default function configureStore() {
  return createStore(rootReducer, applyMiddleware(thunk));
}

/**
 * Return type used by thunks when performing async operations.
 */
export type AppThunk<ReturnType = void> = ThunkAction<Promise<ReturnType>, RootState, void, Action<string>>;
export type AppDispatch = ThunkDispatch<RootState, void, Action<string>>;

import { combineReducers } from 'redux';
import { gaState } from './ga';

export const rootState = combineReducers({ ga: gaState });

export type RootState = ReturnType<typeof rootState>;

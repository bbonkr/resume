import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';
import { rootAction, RootAction } from '../actions';

export const gaId = createReducer<string | null, RootAction>(null).handleAction(
    [rootAction.ga.setGaId],
    (state, action) => action.payload || null,
);

export const gaState = combineReducers({ gaId });

export type GaState = ReturnType<typeof gaState>;

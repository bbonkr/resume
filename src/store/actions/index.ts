import { ActionType } from 'typesafe-actions';
import { gaActions } from './ga';

export const rootAction = {
    ga: gaActions,
};

export type RootAction = ActionType<typeof rootAction>;

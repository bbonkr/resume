import { ActionType, createAction } from 'typesafe-actions';

const setGaId = createAction('set-gaid')<string>();

export const gaActions = { setGaId };

export type GaActions = ActionType<typeof gaActions>;

import { createAction } from 'typesafe-actions';
import { actionTypes } from './types';

export const TempStart = createAction(actionTypes.DUMMY_ACTION)();
export const TempStartSuccess = createAction(actionTypes.DUMMY_ACTION_SUCCESS)();

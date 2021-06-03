import { Epic } from 'redux-observable';
import { filter, mapTo } from 'rxjs/operators';
import { Action, isActionOf } from 'typesafe-actions';
import { RootState } from '../types';
import * as actions from './actions';

export const dummyEpic: Epic<Action, Action, RootState, {}> = (action$, store) =>
  action$.pipe(
    filter(isActionOf(actions.TempStart)),
    mapTo(actions.TempStartSuccess()),
  );

const middlewares = [dummyEpic];

export default middlewares;

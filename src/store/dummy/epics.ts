import { Epic, ofType } from 'redux-observable';
import { mapTo } from 'rxjs/operators';
import { getType, Action } from 'typesafe-actions';
import { RootState } from '../types';
import * as actions from './actions';

const dummyEpic: Epic<Action, Action, RootState> =
    (action$, _store) =>
        action$.pipe(
            ofType(getType(actions.TempStart)),
            mapTo(actions.TempStartSuccess()),
        );

const epics = [dummyEpic];
export default epics;

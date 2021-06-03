import { combineReducers } from "redux";
import { combineEpics, Epic } from 'redux-observable';
import { catchError } from "rxjs/operators";

import dummyReducer from "./dummy/reducer";
import dummyEpics from "./dummy/epics";
import { Action } from "typesafe-actions";
import { RootState } from "./types";
  
export const rootReducer = combineReducers<RootState>({
	temp: dummyReducer,
});

export const rootEpic: Epic<Action, Action, RootState, {}> =
	(action$, state$, dependencies) =>
		combineEpics(
			...dummyEpics,
		)(action$, state$, dependencies).pipe(
			catchError((error, source) => {
				console.error(error);
				return source;
			})
		);


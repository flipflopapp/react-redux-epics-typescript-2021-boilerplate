import { combineReducers } from "redux";
import { combineEpics } from 'redux-observable';

import dummyReducer from "./dummy/reducer";
import dummyEpics from "./dummy/epics";
import { RootState } from "./types";
  
export const rootReducer = combineReducers<RootState>({
	temp: dummyReducer,
});

export const rootEpic = combineEpics(...dummyEpics);

import { createStore, compose, applyMiddleware } from "redux";
import { createEpicMiddleware } from 'redux-observable';
import { rootReducer, rootEpic } from "../store";
import { Action } from "typesafe-actions";
import { RootState } from "../store/types";

const epicMiddleware = createEpicMiddleware<Action,
  Action,
  RootState>({ dependencies: {} });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
  const enhancer = composeEnhancers(applyMiddleware(epicMiddleware));
  const store = createStore(rootReducer, enhancer);
  epicMiddleware.run(rootEpic);
  return { store };
}

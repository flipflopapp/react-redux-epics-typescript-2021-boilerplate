import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { createStore, compose, applyMiddleware } from "redux";
import { createEpicMiddleware } from 'redux-observable';

import { rootReducer, rootEpic } from "../store";
import { Action } from "typesafe-actions";
import { RootState } from "../store/types";

const epicMiddleware = createEpicMiddleware<Action,
  Action,
  RootState>({ dependencies: {} });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
	key: 'root',
	storage,
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore() {
  const enhancer = composeEnhancers(applyMiddleware(epicMiddleware));
  const store = createStore(persistedReducer, enhancer);
  const persistor = persistStore(store);
  epicMiddleware.run(rootEpic);
  return { store, persistor };
}

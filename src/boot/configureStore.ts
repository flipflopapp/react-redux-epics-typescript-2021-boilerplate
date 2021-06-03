import devTools from "remote-redux-devtools";
import { createStore, compose } from "redux";
import { persistStore } from "redux-persist";
import reducer from "../store";
import { VoidFunction } from "../helpers/ts";

export default function configureStore(onCompletion: VoidFunction): any {
  const enhancer = compose(
    devTools({
      name: "nativestarterkit",
      realtime: true
    })
  );

  const store = createStore(reducer, enhancer);
  persistStore(store, {}, onCompletion);
  return store;
}

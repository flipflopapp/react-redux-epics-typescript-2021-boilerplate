import * as React from "react";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { Store } from "redux";

import configureStore from "./configureStore";
import App from "../components/App";
import { Persistor } from "redux-persist";
import { RootState } from "../store/types";

export interface Props {}

interface State {
  store: Store<RootState>;
  persistor: Persistor;
}

export default class Setup extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = configureStore();
  }

  render() {
    return (
      <Provider store={this.state.store}>
        <PersistGate loading={null} persistor={this.state.persistor}>
          <App />
        </PersistGate>
      </Provider>
    );
  }
}

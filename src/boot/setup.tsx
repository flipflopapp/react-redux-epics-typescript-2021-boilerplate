import * as React from "react";
import { Provider } from "react-redux";
import { Store } from "redux";

import configureStore from "./configureStore";
import App from "../components/App";
import { RootState } from "../store/types";

export interface Props {}

interface State {
  store: Store<RootState>;
}

export default class Setup extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = configureStore();
  }

  render() {
    return (
      <Provider store={this.state.store}>
        <App />
      </Provider>
    );
  }
}

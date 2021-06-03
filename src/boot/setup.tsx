import * as React from "react";
import { Provider } from "react-redux";

import configureStore from "./configureStore";
import App from "../components/App";

export interface Props {}

export interface State {
  store: any;
  isLoading: boolean;
}

export default class Setup extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isLoading: false,
      store: configureStore(() => this.setState({ isLoading: false }))
    };
  }

  render() {
    return (
      <Provider store={this.state.store}>
        <App />
      </Provider>
    );
  }
}

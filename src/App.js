if(__DEV__) {
  import('./utils/ReactotronConfig').then(() => console.log('Reactotron Configured'))
}
import React from 'react';
import { Provider } from 'react-redux'
import store from "./store";
import AppNavigator from "./navigator/AppNavigator";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator/>
      </Provider>
    );
  }
}

import React, { Component } from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import Navigator from './Navigator';
import configureStore from './store/configureStore';

const store = configureStore();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};

export default class App extends Component {
  render() {
    return (
      <StoreProvider store={store}>
        <PaperProvider theme={theme}>
          <Navigator />
        </PaperProvider>
      </StoreProvider>
    );
  }
}

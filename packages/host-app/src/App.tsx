import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './navigation/MainNavigator';
import SplashScreen from './Splashscreen';
import { Federated } from '@callstack/repack/client';
import RNBootSplash from 'react-native-bootsplash';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { EventProvider } from 'react-native-outside-press';
import { ClickOutsideProvider } from 'react-native-click-outside';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import store, { persistor } from './store/store';
import { ThemeProvider } from '@shopify/restyle';
import lightThemes from './style/theme';

const linking = {
  prefixes: ['hostapp://'],
  config: {
    screens: {
      Home: 'Home',
      Detail: 'Detail',
      MiniApp: 'MiniApp',
      news: 'news',
    },
  },
};
const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ClickOutsideProvider>
        <EventProvider
          style={{
            flex: 1,
          }}>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <ThemeProvider theme={lightThemes}>
                <NavigationContainer>
                  <MainNavigator />
                </NavigationContainer>
              </ThemeProvider>
            </PersistGate>
          </Provider>
        </EventProvider>
      </ClickOutsideProvider>
    </GestureHandlerRootView>
  );
};

export default App;

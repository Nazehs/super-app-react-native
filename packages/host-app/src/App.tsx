import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './navigation/MainNavigator';
import SplashScreen from './Splashscreen';
import { Federated } from '@callstack/repack/client';
import RNBootSplash from 'react-native-bootsplash';

const AuthProvider = React.lazy(() =>
  Federated.importModule('auth', './AuthProvider'),
);
const SignInScreen = React.lazy(() =>
  Federated.importModule('auth', './SignInScreen'),
);
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
    <React.Suspense fallback={<SplashScreen />}>
      <AuthProvider>
        {({ isSignOut, isLoading, mobileNumber }: { isSignOut: boolean, isLoading: boolean, mobileNumber: string }) => {
          console.log("Auth Data in host App: ", { isSignOut, isLoading, mobileNumber });
          if (isLoading) {
            return <SplashScreen />;
          }
          if (isSignOut) {
            return (
              <React.Suspense fallback={<SplashScreen />}>
                <SignInScreen />
              </React.Suspense>
            );
          }
          return (
            <NavigationContainer
              linking={linking}
              onReady={() => RNBootSplash.hide({fade: true})}>
              <MainNavigator />
            </NavigationContainer>
          );
        }}
      </AuthProvider>
    </React.Suspense>
  );
};

export default App;

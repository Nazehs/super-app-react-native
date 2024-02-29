import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './navigation/MainNavigator';
import SplashScreen from './Splashscreen';
import { Federated } from '@callstack/repack/client';

const AuthProvider = React.lazy(() =>
  Federated.importModule('auth', './AuthProvider'),
);
const SignInScreen = React.lazy(() =>
  Federated.importModule('auth', './SignInScreen'),
);

const App = () => {
  return (
    <React.Suspense fallback={<SplashScreen />}>
      <AuthProvider>
        {({ isSignOut, isLoading, mobileNumber }: { isSignOut: boolean, isLoading: boolean, mobileNumber: string }) => {
          console.log('Auth Data in mini App: ', { isSignOut, isLoading, mobileNumber });
          if (!isLoading) {
            return <SplashScreen />;
          }
          if (!isSignOut) {
            return (
              <React.Suspense fallback={<SplashScreen />}>
                <SignInScreen />
              </React.Suspense>
            );
          }
          return (
            <NavigationContainer>
              <MainNavigator data={{ mobileNumber, isLoading, isSignOut }} />
            </NavigationContainer>
          );
        }}
      </AuthProvider>
    </React.Suspense>
  );
};

export default App;

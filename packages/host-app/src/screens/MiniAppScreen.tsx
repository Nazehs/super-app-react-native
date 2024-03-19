
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Federated } from '@callstack/repack/client';
import SplashScreen from '../Splashscreen';
import { ActivityIndicator, View, StyleSheet } from 'react-native';


const MiniAppNavigator = React.lazy(() =>
  Federated.importModule('MiniApp', './MiniApp'),
);

const FallbackComponent = () => (
  <View style={styles.container}>
    <ActivityIndicator color="rgba(56, 30, 114, 1)" size="large" />
  </View>
);

const MiniAppScreen = () => {
  return (
    <React.Suspense fallback={<SplashScreen />}>
      {/* <AuthProvider>
        {({ isSignOut, isLoading, mobileNumber }: { isSignOut: boolean, isLoading: boolean, mobileNumber: string }) => {
          console.log('Auth Data in mini App: ', { isSignOut, isLoading, mobileNumber });
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
          return ( */}
      <React.Suspense fallback={<FallbackComponent />}>
        <MiniAppNavigator />
      </React.Suspense>
      {/* );
        }}
      </AuthProvider> */}
    </React.Suspense>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MiniAppScreen;

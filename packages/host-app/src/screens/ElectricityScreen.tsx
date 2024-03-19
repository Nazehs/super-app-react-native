import React from 'react';
import { Federated } from '@callstack/repack/client';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const ElectricityAppNavigator = React.lazy(() =>
  Federated.importModule('ECG', './ECG'),
);

const FallbackComponent = () => (
  <View style={styles.container}>
    <ActivityIndicator color="rgba(56, 30, 114, 1)" size="large" />
  </View>
);

const ElectricityScreen = () => {
  return (
    <React.Suspense fallback={<FallbackComponent />}>
      <ElectricityAppNavigator />
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

export default ElectricityScreen;

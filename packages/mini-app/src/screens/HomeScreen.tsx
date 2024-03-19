import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect } from 'react';
import { Alert, Button, Linking, StyleSheet, Text, View } from 'react-native';
import { MainStackNavigationProp } from '../navigation/MainNavigator';


const HomeScreen = () => {
  const navigation = useNavigation<MainStackNavigationProp>();
  useEffect(() => {
    const handleDeepLink = (event: any) => {
      console.log(event.url);
    };

    const deepLinkSubscription = Linking.addEventListener(
      'url',
      handleDeepLink,
    );

    return () => deepLinkSubscription.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>MiniApp HomeScreen</Text>
      <Button
        color="rgba(127, 103, 190, 1)"
        title="Navigate to MiniApp GalleryScreen"
        onPress={() => {
          navigation.navigate('Gallery');
        }}
      />
      <Button
        color="rgba(127, 103, 190, 1)"
        title="Navigate to Super APP"
        onPress={() => {
          console.log('clicked to open main app');
          Linking.openURL('hostapp://Home');
        }}
      />

      <Button
        color="rgba(127, 103, 190, 1)"
        title="Navigate to Super APP Detail"
        onPress={() => {
          console.log('clicked to open main app');
          Linking.openURL('hostapp://Detail');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 40,
  },
});

export default HomeScreen;

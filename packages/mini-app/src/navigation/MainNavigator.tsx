import React from 'react';
import { StyleSheet } from 'react-native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import GalleryScreen from '../screens/GalleryScreen';

export type MainStackParamList = {
  Home: undefined;
  Gallery: undefined;
  news: undefined;
};

export type MainStackNavigationProp =
  NativeStackNavigationProp<MainStackParamList>;

const Main = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = (data: { mobileNumber: string, isSignOut: boolean, isLoading: boolean }) => {
  console.log("mobileNumber", data)
  return (
    <Main.Navigator
      screenOptions={{
        headerTitle: 'MiniApp',
        headerBackTitleVisible: false,
        headerShown: false,
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitle,
        headerTintColor: 'rgba(255,255,255,1)',
      }}>
      <Main.Screen name="Begin" component={HomeScreen} />
      <Main.Screen name="Gallery" component={GalleryScreen} />
    </Main.Navigator>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgba(79, 55, 139, 1)',
  },
  headerTitle: {
    color: 'rgba(255,255,255,1)',
  },
});

export default MainNavigator;

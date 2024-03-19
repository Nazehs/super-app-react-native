import React from 'react';
import { StyleSheet } from 'react-native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import MiniAppScreen from '../screens/MiniAppScreen';
import NewsScreen from '../screens/NewsScreen';
import ElectricityScreen from '../screens/ElectricityScreen';

export type MainStackParamList = {
  MainHome: undefined;
  Detail: undefined;
  MiniApp: undefined;
  news: undefined;
  MiniAppExt: undefined;
  ECG: undefined;
};

export type MainStackNavigationProp =
  NativeStackNavigationProp<MainStackParamList>;

const Main = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = () => {
  return (
    <Main.Navigator
      screenOptions={{
        // headerTitle: 'Main App',
        headerBackTitleVisible: false,
        headerShown: false,
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitle,
        headerTintColor: '#004f71',
      }}>
      <Main.Screen name="MainHome" component={HomeScreen} />
      <Main.Screen name="Detail" component={DetailScreen} />
      {/* <Main.Screen name="MiniApp" component={MiniAppScreen} /> */}
      <Main.Screen name="news" component={NewsScreen} />
      <Main.Screen name="MiniApp" component={MiniAppScreen} />
    </Main.Navigator>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgba(56, 30, 114, 1)',
  },
  headerTitle: {
    color: 'rgba(255,255,255,1)',
  },
});

export default MainNavigator;

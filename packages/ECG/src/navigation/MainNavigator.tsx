import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import { verticalScale } from 'react-native-size-matters';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import BillPaymentDetailsPage from '@/screens/BillPaymentDetailsPage';
import PendingPaymentScreen from '@/screens/PendingPaymentPage';
import PaymentDetailsSummaryPage from '@/screens/PaymentDetailsSummaryPage';
import { navigations } from '@/utils/const';
import { colors } from '@/utils/colors';
import { Image } from 'react-native-svg';
import Images from '@/utils/Images';
import HomeScreen from '@/screens/HomeScreen';

export type MainStackParamList = {
  Home: undefined;
  PaymentDetailsSummaryPage: undefined;
  BillPaymentDetailsPage: undefined;
  PendingPaymentPage: undefined;
};

export type MainStackNavigationProp =
  NativeStackNavigationProp<MainStackParamList>;

const Main = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = (data: { mobileNumber: string, isSignOut: boolean, isLoading: boolean }) => {
  // console.log("data from host/auth - ECG APP", data)

  return (
    <Main.Navigator
      screenOptions={{
        headerShown: false,
        headerBackTitleVisible: false,
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitle,
        headerTitleAlign: 'center',
        contentStyle: styles.contentStyle,
      }}
    >
      <Main.Screen
        name={navigations.HomeScreen}
        component={HomeScreen}
        options={{
          headerTitle: "Electricity",
        }}
      />
      <Main.Screen
        name={navigations.BillPaymentDetailsPage}
        component={BillPaymentDetailsPage}

      />
      <Main.Screen
        name={navigations.PendingPaymentPage}
        component={PendingPaymentScreen}
        options={{
          headerShown: false,
          gestureEnabled: false,
          headerLeft: () => null,
          headerRight: () => null,
        }}
      />

      <Main.Screen
        name={navigations.PaymentDetailsSummaryPage}
        component={PaymentDetailsSummaryPage}
      />
    </Main.Navigator>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
    width: '100%',
    height: verticalScale(105),
    paddingBottom: 60,
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: 'rgba(255,255,255,1)',
  },
  contentStyle: {
    backgroundColor: colors.white,
  },
  headerIcons: {
    width: widthPercentageToDP('10'),
    height: heightPercentageToDP('10'),
  },
});

export default MainNavigator;

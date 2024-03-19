import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { MainStackNavigationProp } from '../navigation/MainNavigator';
import { DarkStatusBar } from '../../components/StausBar';

const HomeScreen = ({ route }) => {
  const navigation = useNavigation<MainStackNavigationProp>();

  if (route.params) {
    const { userId, token } = route.params;
    console.log(
      'Data from mini app ',
      JSON.stringify({ userId, token }, null, 2),
    );
  }
  return (
    <ScrollView>
      <DarkStatusBar backgroundColor={'#014f71'} />
      <Text style={styles.label}>Main APP Screen</Text>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.tabs}
          onPress={() => {
            navigation.navigate('Detail');
          }}>
          <Text style={styles.tabText}> Main App DetailScreen </Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={styles.tabs}
          onPress={() => {
            navigation.navigate('MiniApp');
          }}>
          <Text>Bills Payment </Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          style={styles.tabs}
          onPress={() => {
            navigation.navigate('MiniApp');
          }}>
          <Text style={styles.tabText}>Electricity </Text>
        </TouchableOpacity>
      </View>
    </ScrollView >);

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 20,
    marginTop: 40,
    fontWeight: '700',
    color: '#014f71',
    alignContent: 'center',
    textAlign: 'center',
    marginBottom: 40,
  },
  tabs: {
    marginBottom: 40,
    width: 200,
    height: 100,
    color: '#fff',
    backgroundColor: '#014f71',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#004C6E',
    padding: 10,
    fontSize: 30,
    fontWeight: '700',
    alignContent: 'center',
    textAlign: 'center'
  },
  tabText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    alignContent: 'center',
    textAlign: 'center'
  }
});

export default HomeScreen;

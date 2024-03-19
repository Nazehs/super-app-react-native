//CommonEmptyScreen
import {  Box, Text } from './../../atom';
import { globalSunshineYellow } from './../../../style-dictionary-dist/momoStyle';
import { ActivityIndicator, View } from 'react-native';
import React = require('react');

const CommonLoadingScreen = () => {
  return (
    <Box flex={1} style={{position:'absolute',zIndex:10,backgroundColor:'transparent',width:'100%',height:'100%',flex:1,justifyContent:'center',alignItems:'center'}} justifyContent={'center'} alignItems={'center'}>
      <ActivityIndicator color={globalSunshineYellow} size={50} />
    </Box>
  );
};

export default CommonLoadingScreen;

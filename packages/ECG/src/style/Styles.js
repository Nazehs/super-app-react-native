import {StyleSheet, PixelRatio, View} from 'react-native';
import {color} from './theme';
import {scale} from 'react-native-size-matters';
import { heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const VerticalBox = ({style}) => {
  return <View style={{paddingHorizontal: style || 10}}></View>;
};

export const PaddingBox = ({style}) => {
  return <View style={{height: style || 20}}></View>;
};

export const Styles = StyleSheet.create({
  iconStyle: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    paddingTop: 6,
  },
  cricle:{
    width:5,
    height:5,
    borderRadius:10,
    // backgroundColor:color.red,
    marginTop:hp(4.5),
  },
  imageStyle:{
    width:"100%",

  },
  boxWithShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 2
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  flexR_Sb_AC: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexR_JC: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  text10: {
    fontFamily: 'Poppins-Medium',
    fontSize: 10 / PixelRatio.getFontScale(),
    color: '#000'
  },
  text10R: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10 / PixelRatio.getFontScale(),
    color: '#000'
  },
  text10L: {
    fontFamily: 'Poppins-Light',
    fontSize: 12 / PixelRatio.getFontScale(),
    color: '#000'
  },
  text11: {
    fontFamily: 'Poppins-Medium',
    fontSize: 11 / PixelRatio.getFontScale(),
    color: '#000'
  },
  text12: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12 / PixelRatio.getFontScale(),
    color: '#000'
  },
  text12R: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12 / PixelRatio.getFontScale(),
    color: '#000'
  },
  text12SB: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12 / PixelRatio.getFontScale(),
    color: '#000'
  },
  text13: {
    fontFamily: 'Poppins-Medium',
    fontSize: 13 / PixelRatio.getFontScale(),
    color: '#000'
  },
  text13R: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13 / PixelRatio.getFontScale(),
    color: '#000'
  },
  text14: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14 / PixelRatio.getFontScale(),
    color: '#000'
  },
  text14SB: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14 / PixelRatio.getFontScale(),
    color: '#000'
  },
  text14R: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14 / PixelRatio.getFontScale(),
    color: '#000'
  },
  text15: {
    fontFamily: 'Poppins-Medium',
    fontSize: 15 / PixelRatio.getFontScale(),
    color: '#000'
  },
  text16: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16 / PixelRatio.getFontScale(),
    color: '#000'
  },
  text16SB: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16 / PixelRatio.getFontScale(),
    color: '#000'
  },
  text16B: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16 / PixelRatio.getFontScale(),
    color: '#000'
  },
  text17: {
    fontFamily: 'Poppins-Medium',
    fontSize: 17 / PixelRatio.getFontScale(),
    color: '#000'
  },
  text18: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18 / PixelRatio.getFontScale(),
    color: '#000'
  },
  text18SB: {
    fontFamily: 'MTNBrighterSans-Bold.ttf',
    fontSize: 18 / PixelRatio.getFontScale(),
    color: '#000'
  },
  text19: {
    fontFamily: 'Poppins-Medium',
    fontSize: 19 / PixelRatio.getFontScale(),
    color: '#000'
  },
  text20: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20 / PixelRatio.getFontScale(),
    color: '#000'
  },
  text20SB: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20 / PixelRatio.getFontScale(),
    color: '#000'
  },
  text21: {
    fontFamily: 'Poppins-Medium',
    fontSize: 21 / PixelRatio.getFontScale(),
    color: '#000'
  },
  text22: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22 / PixelRatio.getFontScale(),
    color: '#000'
  },
  text23: {
    fontFamily: 'Poppins-Medium',
    fontSize: 23 / PixelRatio.getFontScale(),
    color: '#000'
  },
  text24: {
    fontFamily: 'Poppins-Medium',
    fontSize: 24 / PixelRatio.getFontScale(),
    color: '#000'
  },
  text24SB: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24 / PixelRatio.getFontScale(),
    color: '#000'
  },
  text25: {
    fontFamily: 'Poppins-Medium',
    fontSize: 25 / PixelRatio.getFontScale(),
    color: '#000'
  },
  text36: {
    fontFamily: 'LuckiestGuy-Regular',
    fontSize: 36 / PixelRatio.getFontScale(),
    color: '#000'
  },
  text36MR: {
    fontFamily: 'MouseMemoirs-Regular',
    fontSize: 36 / PixelRatio.getFontScale(),
    color: '#000'
  },
});

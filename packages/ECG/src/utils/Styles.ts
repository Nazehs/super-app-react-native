import { StyleSheet, PixelRatio, View } from 'react-native';
import { scale } from 'react-native-size-matters';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { colors } from './colors';

// export const VerticalBox = ({ style }) => {
//   return <View style={ [styles.verticalBox, style] }> </View>;
// };

// export const PaddingBox = ({ style }) => {
//   return <View style={ [styles.paddingBox, style] }> </View>;
// };

const styles = StyleSheet.create({
  verticalBox: {
    paddingHorizontal: 10,
  },
  paddingBox: {
    height: 20,
  },
});


export const Styles = StyleSheet.create({
  iconStyle: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    paddingTop: 6,
  },
  cricle: {
    width: 5,
    height: 5,
    borderRadius: 10,
    backgroundColor: colors.red,
    marginTop: hp(4.5),
  },
  imageStyle: {
    width: "100%",

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
    color: colors.textColor,
  },
  text10R: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10 / PixelRatio.getFontScale(),
    color: colors.textColor,
  },
  text10L: {
    fontFamily: 'Poppins-Light',
    fontSize: 12 / PixelRatio.getFontScale(),
    color: colors.textColor,
  },
  text11: {
    fontFamily: 'Poppins-Medium',
    fontSize: 11 / PixelRatio.getFontScale(),
    color: colors.textColor,
  },
  text12: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12 / PixelRatio.getFontScale(),
    color: colors.textColor,
  },
  text12R: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12 / PixelRatio.getFontScale(),
    color: colors.textColor,
  },
  text12SB: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12 / PixelRatio.getFontScale(),
    color: colors.textColor,
  },
  text13: {
    fontFamily: 'Poppins-Medium',
    fontSize: 13 / PixelRatio.getFontScale(),
    color: colors.textColor,
  },
  text13R: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13 / PixelRatio.getFontScale(),
    color: colors.textColor,
  },
  text14: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14 / PixelRatio.getFontScale(),
    color: colors.textColor,
  },
  text14SB: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14 / PixelRatio.getFontScale(),
    color: colors.textColor,
  },
  text14R: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14 / PixelRatio.getFontScale(),
    color: colors.textColor,
  },
  text15: {
    fontFamily: 'Poppins-Medium',
    fontSize: 15 / PixelRatio.getFontScale(),
    color: colors.textColor,
  },
  text16: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16 / PixelRatio.getFontScale(),
    color: colors.textColor,
  },
  text16SB: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16 / PixelRatio.getFontScale(),
    color: colors.textColor,
  },
  text16B: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16 / PixelRatio.getFontScale(),
    color: colors.textColor,
  },
  text17: {
    fontFamily: 'Poppins-Medium',
    fontSize: 17 / PixelRatio.getFontScale(),
    color: colors.textColor,
  },
  text18: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18 / PixelRatio.getFontScale(),
    color: colors.textColor,
  },
  text18SB: {
    fontFamily: 'MTNBrighterSans-Bold.ttf',
    fontSize: 18 / PixelRatio.getFontScale(),
    color: colors.textColor,
  },
  text19: {
    fontFamily: 'Poppins-Medium',
    fontSize: 19 / PixelRatio.getFontScale(),
    color: colors.textColor,
  },
  text20: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20 / PixelRatio.getFontScale(),
    color: colors.textColor,
  },
  text20SB: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20 / PixelRatio.getFontScale(),
    color: colors.textColor,
  },
  text21: {
    fontFamily: 'Poppins-Medium',
    fontSize: 21 / PixelRatio.getFontScale(),
    color: colors.textColor,
  },
  text22: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22 / PixelRatio.getFontScale(),
    color: colors.textColor,
  },
  text23: {
    fontFamily: 'Poppins-Medium',
    fontSize: 23 / PixelRatio.getFontScale(),
    color: colors.textColor,
  },
  text24: {
    fontFamily: 'Poppins-Medium',
    fontSize: 24 / PixelRatio.getFontScale(),
    color: colors.textColor,
  },
  text24SB: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24 / PixelRatio.getFontScale(),
    color: colors.textColor,
  },
  text25: {
    fontFamily: 'Poppins-Medium',
    fontSize: 25 / PixelRatio.getFontScale(),
    color: colors.textColor,
  },
  text36: {
    fontFamily: 'LuckiestGuy-Regular',
    fontSize: 36 / PixelRatio.getFontScale(),
    color: colors.textColor,
  },
  text36MR: {
    fontFamily: 'MouseMemoirs-Regular',
    fontSize: 36 / PixelRatio.getFontScale(),
    color: colors.textColor,
  },
});

import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, { ReactNode } from 'react';
import { verticalScale } from 'react-native-size-matters';
import Images from '../../../utils/Images';
import { useNavigation } from '@react-navigation/native';
import { Styles } from '../../../utils/Styles';
import Box from '../../atom-del/Box';
import { colors } from '../../../utils/colors';

type ContainerProps = {
  children?: ReactNode,
  title?: string,
  arrowIcon?: boolean,
  style?: {},
}

const Header = ({
  arrowIcon = true,
  title = "",
  style = {},
}) => {
  const navigation = useNavigation();
  return (
    <Box style={{ ...styles.container, ...style }}>
      {arrowIcon && (
        <TouchableOpacity
          style={{ ...styles.leftIconStyle }}
          onPress={() =>
            navigation.goBack()
          }>
          <Image style={{ width: 25, height: 25 }} source={Images.ARROWLEFT} tintColor={colors.secondary} />
          {/* <ARROWRIGHT  width="70%" height="70%" stroke="black" /> */}
        </TouchableOpacity>
      )}
      <Text style={{ ...Styles.text18SB, color: colors.white, }}>{title}</Text>
      {/* {isSearchBar ? (
        <View style={styles.box}>
          <View style={Styles.flexR_JC}>
            <Image
              source={Images.SEARCH}
              tintColor={colors.greyIcon}
              style={styles.leftIcon}
            />
            <HorizontalBox width={3} />
            <TextInput
              placeholder="Search"
              value={search}
              onChangeText={text => onSearchChange(text)}
              style={{...styles.inputBox, ...Styles.text12}}
            />
          </View>
          {search != 0 && (
            <TouchableOpacity onPress={()=>onSearchChange("")}>
              <Image
                source={Images.CLOSE}
                tintColor={colors.greyIcon}
                style={styles.leftIcon}
              />

            </TouchableOpacity>
          )}
        </View>
      ) : (
        <>
          <Text style={{...Styles.text16SB, color:titleColor,}}>{title}</Text>
          {searchIcon && (
            <TouchableOpacity
              style={{...styles.rightIconStyle}}
              onPress={() => navigation.navigate(navigations.SearchScreen)}>
              <Image source={Images.SEARCH} style={styles.leftIcon} />
            </TouchableOpacity>
          )}
          {filterIcon && (
            <TouchableOpacity
              style={{...styles.rightIconStyle}}
              onPress={onPressFilter}>
              <Image source={Images.FILTER} style={styles.leftIcon} />
            </TouchableOpacity>
          )}
           {isNotification && !isSelectButton ? (
            <TouchableOpacity
              style={{...styles.rightbuttonStyle}}
              onPress={()=>onPressSelectNCancelButton("select")}>
             <Text style={{...Styles.text12,color:colors.red}}>{strings.select}</Text>
            </TouchableOpacity>
          ):isNotification && isSelectButton ? (
            <TouchableOpacity
              style={{...styles.rightbuttonStyle}}
              onPress={()=>onPressSelectNCancelButton("cancle")}>
              <Text style={{...Styles.text12,color:colors.greyIcon}}>{strings.cancel}</Text>
            </TouchableOpacity>
          ):null}
        </>
      )} */}
    </Box>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: '100%',
    height: verticalScale(55),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },
  inputBox: {
    width: '80%',
  },
  rightbuttonStyle: {
    position: 'absolute',
    right: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: '80%',
    height: '90%',
    marginLeft: 20,
    backgroundColor: colors.grey,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    borderRadius: 10,
  },
  leftIcon: {
    width: 20,
    height: 20,
  },
  leftIconStyle: {
    position: 'absolute',
    left: 10,
    width: 30,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: colors.black,
  },
  rightIconStyle: {
    position: 'absolute',
    right: 10,
    width: 30,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: colors.black,
  },
});

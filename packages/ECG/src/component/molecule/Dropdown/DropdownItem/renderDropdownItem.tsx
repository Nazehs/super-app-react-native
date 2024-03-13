import TouchableOpacity from '@/component/atom/TouchableOpacity';
import {getFontSizeByWindowWidth as gsw} from '@/style/theme';
import React from 'react';
import {selectRenderItemType} from '../DropdownSearch';
import {Text} from '@atom';

const DropdownItem = ({item, onItemPress, selected}: selectRenderItemType) => {
  return (
    <TouchableOpacity
      bg={item.label === selected ? 'extraLightGrey' : 'transparent'}
      height={gsw(34)}
      justifyContent={'center'}
      px={'hs'}
      testID="tes"
      zIndex={200}
      onPress={() => onItemPress(item)}>
      <Text
        fontFamily="MTNBrighterSans-Regular"
        fontSize={gsw(16)}
        color={'black'}>
        {item['label']}
      </Text>
    </TouchableOpacity>
  );
};

export default DropdownItem;

import {gpsh, gpsw} from '@/utils/parseTokenStyle';
import {Text, TouchableOpacity} from '@atom';

const renderAccountItem = ({item, onItemPress, selected}: any) => {
  // console.log({value: item?.accountNumber, selected: selected});
  return (
    <TouchableOpacity
      bg={item.accountNumber === selected ? 'extraLightGrey' : 'transparent'}
      justifyContent={'center'}
      px={'hs'}
      testID="tes"
      zIndex={200}
      style={{
        paddingVertical: gpsh(5),
      }}
      onPress={() =>
        onItemPress({
          ...item,
          value: item['accountNumber'],
          label: `${item['accountType']} account`,
        })
      }>
      <Text
        fontFamily="MTNBrighterSans-Regular"
        fontSize={gpsw(12)}
        color={'black'}>
        {`${item['accountType']} account`}
      </Text>
      <Text
        fontFamily="MTNBrighterSans-Medium"
        fontSize={gpsw(16)}
        color={'momoBlue'}>
        {item['accountNumber']}
      </Text>
    </TouchableOpacity>
  );
};

export default renderAccountItem;

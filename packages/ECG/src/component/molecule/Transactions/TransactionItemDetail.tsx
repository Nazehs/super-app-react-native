import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { Box, Text } from '../../atom';
import { getFontSizeByWindowWidth } from '../../../style/theme';

type TransactionItemDetailType = {
  title?: string;
  value?: string;
  bold?: boolean;
  itemContainerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  valueStyle?: StyleProp<TextStyle>;
};

const TransactionItemDetail = ({
  title,
  value,
  bold,
  titleStyle,
  valueStyle,
  itemContainerStyle,
}: TransactionItemDetailType) => {
  console.log(title)
  return (
    <Box
      flexDirection={'row'}
      style={[itemContainerStyle, { justifyContent: 'space-between' }]}>
      <Box width={getFontSizeByWindowWidth(103)} mr={'hsm'}>
        <Text style={titleStyle} variant={'regular12'}>
          {title}
        </Text>
      </Box>
      <Text
        style={[valueStyle, { width: '50%' }]}
        textAlign={'right'}
        variant={bold ? 'medium12' : 'regular12'}
        color={'black'}>
        {value?.toString().trim()}
      </Text>
    </Box>
  );
};

export default TransactionItemDetail;

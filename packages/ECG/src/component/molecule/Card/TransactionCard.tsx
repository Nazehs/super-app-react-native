import React from 'react';
import Card from './Card';
import { Box, Text } from '../../atom';
import { getFontSizeByWindowHeight, getFontSizeByWindowWidth } from '../../../style/theme';


type TransactionCardType = {
  title: string;
  date: string;
  type: string;
  amount: string;
  credit?: boolean;
  topBoxed?: boolean;
};

const TransactionCard = ({
  title,
  date,
  type,
  amount,
  credit,
  topBoxed,
}: TransactionCardType) => {


  return (
    <Card
      variant={'shadow'}
      style={[
        {
          paddingVertical: getFontSizeByWindowHeight(10),
          paddingHorizontal: getFontSizeByWindowWidth(10),
          flexDirection: 'row',
          justifyContent: 'space-between',
        },
        topBoxed && { borderTopLeftRadius: 0, borderTopRightRadius: 0 },
      ]}>
      <Box>
        <Text
          color={'black'}
          style={{
            fontFamily: 'MTNBrighterSans-Regular',
            fontSize: getFontSizeByWindowWidth(10),
            lineHeight: getFontSizeByWindowHeight(12),
          }}>
          {title}
        </Text>
        <Text
          color={'grey'}
          style={{
            fontFamily: 'MTNBrighterSans-Regular',
            fontSize: getFontSizeByWindowWidth(9),
            lineHeight: getFontSizeByWindowHeight(12),
          }}>
          {date}
        </Text>
        <Text
          color={'lightGrey'}
          style={{
            fontFamily: 'MTNBrighterSans-Regular',
            fontSize: getFontSizeByWindowWidth(9),
            lineHeight: getFontSizeByWindowHeight(12),
          }}>
          Transaction type: {type}
        </Text>
      </Box>
      <Text
        color={credit ? 'green100' : 'red100'}
        style={{
          fontFamily: 'MTNBrighterSans-Medium',
          fontSize: getFontSizeByWindowWidth(10),
          lineHeight: getFontSizeByWindowHeight(12),
        }}>{`${credit ? '+' : '-'} ${amount}`}</Text>
    </Card>
  );
};

export default TransactionCard;

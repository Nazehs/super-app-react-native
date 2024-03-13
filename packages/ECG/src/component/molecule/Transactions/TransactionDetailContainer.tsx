import React from 'react';
import { gpsh, gpsw } from '../../../utils/parseTokenStyle';
import { Card } from '..';

const TransactionDetailContainer = ({ children, total, containerStyle }: any) => {
  return (
    <Card
      variant={'shadow'}
      pt={'vs'}
      pb={'vm'}
      style={[
        {
          backgroundColor: '#FCFCFC',
          borderColor: total ? 'transparent' : 'lightGrey',
          paddingHorizontal: gpsh('15'),
          borderRadius: gpsw('9'),
        },
        containerStyle,
      ]}>
      {children}
    </Card>
  );
};

export default TransactionDetailContainer;

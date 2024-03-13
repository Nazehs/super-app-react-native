import React, { ReactNode } from 'react';
import ConfirmDetailContainer from './TransactionDetailContainer';
import TransactionItemDetail from './TransactionItemDetail';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

const ConfirmDetail = ({
  data,
  children,
  total,
  containerStyle,
  titleStyle,
  valueStyle,
  mapKey,
}: {
  data: object;
  total?: string;
  children?: ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  valueStyle?: StyleProp<TextStyle>;
  mapKey?: any;
}) => {
  return (
    <ConfirmDetailContainer {...{ containerStyle }}>
      {Object.entries(data).map(([key, value]) => {
        if (key in data && value !== '') {
          const itemKey = mapKey
            ? mapKey[key] === undefined
              ? key
              : mapKey[key]
            : key;
          return (
            <TransactionItemDetail
              key={key}
              title={itemKey}
              value={value}
              {...{ titleStyle, valueStyle }}
            />
          );
        }
        return null;
      })}
      {children}
    </ConfirmDetailContainer>
  );
};

export default ConfirmDetail;

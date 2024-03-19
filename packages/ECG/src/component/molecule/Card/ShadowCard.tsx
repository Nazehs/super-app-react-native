import { ForwardedRef, ReactNode, forwardRef } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Card from './Card';

type shadowProps = {
  style?: StyleProp<ViewStyle>;
  noShadow?: boolean;
  children?: ReactNode;
};

const ShadowCard = forwardRef(
  ({ style, children, noShadow }: shadowProps, ref: ForwardedRef<View>) => {
    return (
      <Card
        style={[
          !noShadow && {
            padding: 25,
            position: 'absolute',
            top: 0,
            backgroundColor: 'white',
            width: widthPercentageToDP('90%'),
            borderRadius: 16,
            borderWidth: 1,
            borderColor: '#F2F2F2',
            marginTop: heightPercentageToDP('10%'),
          },
          style,
        ]}>
        {children}
      </Card>
    );
  },
);

export default ShadowCard;

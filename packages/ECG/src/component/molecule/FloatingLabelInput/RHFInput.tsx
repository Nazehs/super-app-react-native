import FLabelInput, { Props } from './../../molecule/FloatingLabelInput/FLabelInput';
import React from 'react';
import { Controller } from 'react-hook-form';
import formatWithMask from './Mask';
import createNumberMask from './CreateMask';
import { styles as defaultStyles } from './styles';
import { colors } from '../../../utils/colors';

type RHFInputType = Partial<Props> & {
  control: any;
  name: string;
  label?: string;
  styles?: any,
  number?: boolean;
};

const dollarMask = createNumberMask({
  delimiter: ' ',
  separator: '.',
  precision: 0,
});

const RHFInput = ({ control, styles, name, label, number, ...props }: RHFInputType) => {
  const formatNumber = (value: string) => {
    const formattedValueResult = formatWithMask({
      text: value,
      // mask: dollarMask(value),
    });
    return formattedValueResult.masked;
  };

  return (
    <>
      <Controller
        control={control}
        render={({
          field: { onChange, onBlur, value, ref },

          fieldState: { error },
        }) => (
          <FLabelInput
            ref={ref}
            label={label || name}
            style={[
              styles || defaultStyles,
              error ? { borderColor: colors.red, color: colors.red } : null
            ]}
            onChangeText={text => {
              const formattedText = number ? formatNumber(text) : text;
              onChange(formattedText);
            }}
            value={number ? value?.toString() : value}
            error={error?.message}
            {...props}
          />
        )}
        name={name}
      />
    </>
  );
};

export default RHFInput;
import React from 'react';
import { StyleProp, TextStyle, TouchableOpacity } from 'react-native';
import {
    controlsCheckboxInactive,
    controlsCheckboxSelected,
    controlsCheckboxUnchecked,
} from '@/style-dictionary-dist/momoStyle';
import {
    getFontSizeByWindowHeight as gsh,
    getFontSizeByWindowWidth as gsw,
} from '@/style/theme';
import { gpsh, gpsw } from '@/utils/parseTokenStyle';
import { Box, Icon, Text } from '@atom';

interface CheckboxProps {
    label?: string;
    checked: boolean;
    disabled?: boolean;
    onChange?: (newValue: boolean) => void;
    gap?: number;
    labelStyle?: StyleProp<TextStyle>;
    error?: any;
}
const CheckBox = ({
    label,
    disabled,
    checked = false,
    onChange = () => { },
    gap = 16,
    labelStyle,
    error,
}: CheckboxProps) => {
    console.log('error', error);
    let Ikon;
    switch (checked) {
        case true:
            Ikon = disabled ? (
                <Icon
                    name="DisabledCheckIcon"
                    size={20}
                    color={controlsCheckboxUnchecked}
                />
            ) : (
                <Icon name="CheckIcon" size={20} color={controlsCheckboxSelected} />
            );
            break;
        case false:
            Ikon = disabled ? (
                <Icon
                    name="DisabledEmptyCheckIcon"
                    size={20}
                    color={controlsCheckboxInactive}
                />
            ) : (
                <Icon
                    name="EmptyCheckIcon"
                    size={20}
                    color={controlsCheckboxUnchecked}
                />
            );
            break;

        default:
            break;
    }
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
                if (disabled) return;
                onChange(checked);
            }}
        >
            <Box
                flexDirection="row"
                gap={'hsm'}
                alignItems={'center'}
                style={[
                    !!label && {
                        gap: gsw(gap),
                    },
                ]}>
                {Ikon}
                <Text
                    fontSize={gsw(16)}
                    lineHeight={gsh(24)}
                    style={[
                        {
                            fontFamily: 'MTNBrighterSans-Regular',
                            color: '#5F5F5F',
                        },
                        labelStyle,
                    ]}>
                    {label}
                </Text>
            </Box>
            {error && (
                <Text
                    color={'red100'}
                    style={{
                        fontFamily: 'MTNBrighterSans-Regular',
                        fontSize: gsw(12),
                        paddingTop: gpsh('2'),
                    }}>
                    {typeof error?.message === 'string'
                        ? error?.message.toString()
                        : 'error'}
                </Text>
            )}
        </TouchableOpacity>
    );
};

export default React.memo(CheckBox);


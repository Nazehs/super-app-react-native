import React, { useEffect, useRef } from 'react';
import { Animated, Image, TouchableOpacity } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { AlertMessageType, removeMessage, selectMessage } from '../../../features/alert/alertSlice';
import { useTypedDispatch, useTypedSelector } from '../../../store/store';
import { alertError, alertInfo, alertSuccess, alertWarning } from '../../../style-dictionary-dist/momoStyle';
import { Box, Text } from '../../atom';
import { getFontSizeByWindowHeight } from '../../../style/theme';
import Images from '../../../utils/Images';

export const AlertContent = ({
    message,
    onHide
}: {
    message: AlertMessageType;
    onHide: () => void;
}) => {
    const { duration, type, zIndex, title, close } = message;
    const animationValue = useRef(new Animated.Value(0)).current;
    const dispatch = useTypedDispatch();

    let alertColor;
    switch (type) {
        case 'error':
            alertColor = alertError;
            break;
        case 'warning':
            alertColor = alertWarning;
            break;
        case 'info':
            alertColor = alertInfo;
            break;
        default:
            alertColor = alertSuccess;
            break;
    }

    const renderMessage = () => (
        <Box
            flex={close ? 0.9 : 1}
            style={{ marginTop: -2 }}>
            {title && (
                <Text
                    fontSize={getFontSizeByWindowHeight(14)}
                    lineHeight={getFontSizeByWindowHeight(18)}
                    mb={'vxxs'}
                    color={'white'}>
                    {title}
                </Text>
            )}
            <Text
                fontSize={getFontSizeByWindowHeight(10)}
                lineHeight={getFontSizeByWindowHeight(13)}
                fontFamily="MTNBrighterSans-Regular"
                numberOfLines={2}
                color={'white'}>
                {message.message}
            </Text>
        </Box>
    );

    const startAnimation = () => {
        Animated.sequence([
            Animated.timing(animationValue, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }),
            ...(close ? [] : [
                Animated.delay(duration),
                Animated.timing(animationValue, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: true,
                }),
            ]),
        ]).start(() => {
            !close && onHide();
        });
    };

    useEffect(() => {
        startAnimation();
        return () => { };
    }, [message, close]);

    return (
        <Animated.View
            style={[
                styles.container,
                {
                    backgroundColor: alertColor,
                    alignItems: title ? 'flex-start' : 'center',
                    borderBottomLeftRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                    opacity: animationValue,
                    zIndex: zIndex || 0,
                },
            ]}>
            <Box
                flexDirection={'row'}

                alignItems={title ? 'flex-start' : 'center'}
                style={{ flex: 1, justifyContent: 'flex-start', gap: 10 }}>
                <Image source={Images.INFO_ICON_IMAGE} resizeMode="contain" />
                {renderMessage()}
            </Box>
            {
                close && (
                    <TouchableOpacity
                        onPress={() => dispatch(removeMessage(message))}
                        style={styles.closeButton}>
                    </TouchableOpacity>
                )
            }
        </Animated.View >
    );
};

const Alert = () => {
    const dispatch = useTypedDispatch();
    const messages = useTypedSelector(selectMessage);

    return (
        <>
            {messages.map((msg: AlertMessageType, index) => (
                <AlertContent
                    key={msg.message}
                    message={{
                        ...msg,
                        duration: msg.duration * (index + 1),
                        zIndex: (index + 1) * 10,
                    }}
                    onHide={() => dispatch(removeMessage(msg))}
                />
            ))}
        </>
    );
};

export default Alert;

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        padding: getFontSizeByWindowHeight(12),
        paddingRight: getFontSizeByWindowHeight(13),
        marginTop: 10,
        position: 'absolute',
        bottom: '20@ms',
        width: '100%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    closeButton: {
        height: '100%',
        width: '12%',
        justifyContent: 'center',
        alignSelf: 'stretch',
    },
});
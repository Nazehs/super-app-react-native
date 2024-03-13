import {
    GestureResponderEvent,
    Image,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React, { ReactNode } from 'react';
import BoxAlign from './BoxAlign';
import Images from '../../utils/Images';
import TextView from './TextView';

type RadioContainerProps = {
    children?: ReactNode;
    style?: {};
    statusBarColor?: string;
    value?: boolean;
    title?: string | null;
    onPress?: ((event: GestureResponderEvent) => void) | undefined;
};

const RadioContainer = (props: RadioContainerProps) => {
    const { value = false, style, title, onPress } = props;
    return (
        <BoxAlign style={{ ...styles.container, ...props.style }}>
            <TouchableOpacity onPress={onPress}>
                <Image
                    source={value ? Images.RADIOFULL : Images.RADIOCRICLE}
                    style={styles.images}
                />
            </TouchableOpacity>
            <TextView>{title}</TextView>
        </BoxAlign>
    );
};

export default RadioContainer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    images: {},
});

import { StyleSheet, Text, View } from 'react-native'
import React, { ReactNode } from 'react';
import { scale } from 'react-native-size-matters';
import { Styles } from '../../utils/Styles';
import { colors } from '../../utils/colors';
type CardProps = {
    children?: ReactNode;
    style?: object,
    marginHorizontal?: number,
    bgColor?: string,
}

const Card = (props: CardProps) => {
    const { bgColor = colors.white } = props;
    return (
        <View style={{ ...styles.container, backgroundColor: bgColor, ...props.style, }}>
            {props.children}
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    container: {
        borderRadius: scale(20),
        ...Styles.boxWithShadow,
        backgroundColor: colors.white,
        padding: scale(20),
        marginVertical: 1,
    },
})
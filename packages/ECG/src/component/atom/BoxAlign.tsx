import { StyleSheet, Text, View } from 'react-native'
import React, { ReactNode } from 'react';

type BoxProps = {
    children?: ReactNode;
    style?: {},
    marginHorizontal?: number,
    align?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined;
}

const BoxAlign = (props: BoxProps) => {
    const { align, style } = props;
    return (
        <View style={{ ...styles.align, justifyContent: align, ...props.style, }}>
            {props.children}
        </View>
    )
}

export default BoxAlign

const styles = StyleSheet.create({
    align: {
        flexDirection: "row", alignItems: "center",
    }
})
import { StyleSheet, Text, View } from 'react-native'
import React, { ReactNode } from 'react';

type CenterBoxProps = {
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

const CenterBox = (props: CenterBoxProps) => {
    const { align, style } = props;
    return (
        <View style={{ ...styles.align, justifyContent: align, ...props.style, }}>
            {props.children}
        </View>
    )
}

export default CenterBox

const styles = StyleSheet.create({
    align: {
        alignItems: "center",
        justifyContent:"center",
    }
})
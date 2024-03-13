import { StyleSheet, Text, View } from 'react-native'
import React, { ReactNode } from 'react';

type LineProps = {
    children?: ReactNode;
    style?: object,
    color?: string
}

const Line = (props: LineProps) => {
    const { color = color.line, style } = props;
    return (
        <View style={{ width: "100%", backgroundColor: color, height: 1, ...style }} />
    )
}

export default Line

const styles = StyleSheet.create({})
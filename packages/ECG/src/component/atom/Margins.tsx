import { StyleSheet, Text, View } from 'react-native'
import React, { ReactNode } from 'react';
import { MarginType } from './../../typings/types';
import { verticalScale } from 'react-native-size-matters';

type MarginsProps = {
    children?: ReactNode;
    style?: {},
    type?: null | MarginType  | undefined,
    size?: number,
}

const Margins = (props: MarginsProps) => {
    const { size, type='height' } = props;
    if (type != "height") {
        return (
            <View style={{ paddingHorizontal: verticalScale(size) || 10, }} />
        )
    } else {
        return (
            <View style={{ height: verticalScale(size) || 20 }} />
        )
    }
}

export default Margins

const styles = StyleSheet.create({})
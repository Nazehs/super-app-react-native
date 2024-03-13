import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { ReactNode } from 'react';
import { colors } from '../../utils/colors';

type ContainerProps = {
    children?: ReactNode,
    style?: {},
    statusBarColor?: string,
}

const Container = (props: ContainerProps) => {
    return (
        <SafeAreaView style={{ ...styles.container, ...props.style, }}>
            <StatusBar backgroundColor={props.statusBarColor ? props.statusBarColor : colors.primary} />
            {props.children}
        </SafeAreaView>
    )
}

export default Container

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
})
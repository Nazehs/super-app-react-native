import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { ReactNode } from 'react';
import { palette } from './../../style/theme'

type ContainerProps = {
    children?: ReactNode,
    style?: {},
    statusBarColor?: string,
}

const Container = (props: ContainerProps) => {
    return (
        <SafeAreaView style={{ ...styles.container, ...props.style, }}>
            <StatusBar backgroundColor={props.statusBarColor ? props.statusBarColor : palette.sunshineYellow} />
            {props.children}
        </SafeAreaView>
    )
}

export default Container

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:palette.white,
    },
})
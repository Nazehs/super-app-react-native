import { StyleSheet, Text, View } from 'react-native'
import React, { ReactNode }  from 'react';

type BoxProps ={
    children?: ReactNode;
    style?:{},
    marginHorizontal?:number
}

const Box = (props : BoxProps ) => {
    return (
        <View style={{ ...props.style,marginHorizontal:props.marginHorizontal}}>
              {props.children}
        </View>
    )
}

export default Box

const styles = StyleSheet.create({})
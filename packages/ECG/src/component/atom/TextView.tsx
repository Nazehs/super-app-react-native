import { StyleSheet, Text, View } from 'react-native'
import React, { ReactNode }  from 'react';
import { palette } from '../../style/theme';

type TextProps ={
    children?: ReactNode;
    style?:{},
    marginHorizontal?:number,
    color?: null | string,
}

const TextView = (props : TextProps ) => {
    const {style,color} = props;
    return (
        <Text style={{...style, color:color ? color : palette.black }}>
              {props.children}
        </Text>
    )
}

export default TextView

const styles = StyleSheet.create({})
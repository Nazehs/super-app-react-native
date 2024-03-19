
import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View, Platform } from 'react-native';
import TextView from '../../atom-del/TextView';
import { colors } from '../../../utils/colors';
import { gpsh, gpsw } from '../../../utils/parseTokenStyle';
import { Text } from './../../atom';
import Svg, { Path } from 'react-native-svg';
import { getFontSizeByWindowWidth as gsw } from './../../../style/theme';
import OutsidePressHandler from 'react-native-outside-press';

type ItemListType = {
    label?: string;
    value: string;
    selected?: boolean;
    id: number;
}
type PropsType = {
    onSelected: (args: any) => void;
    items?: ItemListType[];
    placeholder?: string;
    required?: boolean;
    isTouchable?: boolean;
    ref: any;
    defaultValue?: string | null,
    showMeterModalHandler?: (args: any) => void;
}

export const BusinessDropdownSingle = forwardRef((props: PropsType) => {
    const [listItems, setListItems] = useState<ItemListType[]>([])
    const [isItemListShown, setIsItemListShown] = useState<boolean>(false);
    const selectedOption = listItems?.filter(item => (item.label == props.defaultValue || item.id == Number(props.defaultValue)) || item.selected)?.[0]


    useImperativeHandle(props.ref, () => ({
        toggleDropdown: () => setIsItemListShown(prevState => !prevState),
    }));

    const handleChange = useCallback((item: any) => {
        setListItems(listItems.map(data => data.id === item.id ? { ...data, selected: true } : { ...data, selected: false }));
        setIsItemListShown(false);
        props.onSelected(item);
    }, [listItems, props]);

    useEffect(() => {
        setListItems(props.items || []);
    }, [props.items]);

    return (
        <OutsidePressHandler
            onOutsidePress={() => setIsItemListShown(false)}
        >
            <View style={{ flex: 1 }}>
                {selectedOption && (
                    <View style={{
                        backgroundColor: colors.white,
                        marginTop: -12,
                        padding: 4,
                        left: 16,
                        zIndex: 10,
                        position: 'absolute'
                    }}>
                        <TextView>{props.placeholder} {props.required && '*'}</TextView>
                    </View>
                )}
                <TouchableOpacity onPress={() => setIsItemListShown(!isItemListShown)}
                    style={[{
                        justifyContent: 'center',
                        flexDirection: 'row',
                        backgroundColor: colors.white,
                        borderColor: isItemListShown ? colors.momoBlue : '#000',
                        height: 66,
                        width: '100%'
                    }, !isItemListShown && styles.isHidden, isItemListShown && styles.isNotHidden]}>
                    <View style={{ flex: 1, justifyContent: 'center', marginLeft: gpsh('16') }}>
                        <Text
                            fontFamily={'MTNBrighterSans-Regular'}
                            color={'black'}
                            fontWeight={'400'}
                            style={{ fontSize: gsw(16) }}
                        >{`${selectedOption ? selectedOption?.label : props.placeholder} ${(!selectedOption && props.required) ? '*' : ''}`}</Text>
                    </View>
                    <View style={{ marginRight: gpsh('16'), justifyContent: 'center' }}>
                        {!isItemListShown ?
                            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M5 8.00036L11.8526 15.4759C11.9318 15.5624 12.0682 15.5624 12.1474 15.4759L19 8.00036" stroke="black" stroke-linecap="round" />
                            </Svg>
                            :
                            <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                <Path d="M19 15.6364L12.1474 8.16083C12.0682 8.07436 11.9318 8.07436 11.8526 8.16083L5 15.6364" stroke="#004F71" strokeLinecap="round" />
                            </Svg>
                        }
                    </View>
                </TouchableOpacity>
                {isItemListShown &&
                    <View style={[
                        {
                            marginTop: 60,
                            backgroundColor: colors.white,
                            position: 'absolute',
                            width: '100%',
                            zIndex: 100,
                            borderLeftWidth: 2,
                            borderBottomWidth: 2,
                            borderRightWidth: 2,
                            borderColor: colors.momoBlue
                        },
                        styles.selectedIsLast]}>
                        <ScrollView style={{ paddingBottom: 0 }}>
                            {listItems?.map((item, i) =>
                                <TouchableOpacity
                                    onPress={() => handleChange(item)}
                                    key={i}
                                    style={[{
                                        flex: 1,
                                        justifyContent: 'center',
                                        backgroundColor: item.selected ? "#E6EEF1" : colors.white,
                                        paddingVertical: gpsh('8'),
                                        paddingHorizontal: gpsw('10')
                                    }, i === listItems.length - 1 && styles.selectedIsLast]}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ paddingLeft: gpsw('5'), paddingTop: gpsh('1') }}>
                                            <Text fontFamily={'MTNBrighterSans-Regular'} color={'black'} fontSize={16}>{item.label}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )}
                        </ScrollView>
                    </View>
                }
            </View>
        </OutsidePressHandler>
    );
});


const styles = StyleSheet.create({
    selectedIsFirst: {
        borderTopLeftRadius: 10, borderTopRightRadius: 10
    },
    selectedIsLast: {
        borderBottomLeftRadius: 10, borderBottomRightRadius: 10
    },
    errorText: {
        color: 'red',
    },
    isHidden: {
        borderWidth: 1, borderRadius: 15
    },
    isNotHidden: {
        borderWidth: 2, borderTopLeftRadius: 15, borderTopRightRadius: 15, top: 2.5
    },
    ...Platform.select({
        ios: {
            scrollView: {
                shadowColor

                    : "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.1,
                shadowRadius: 1.41,
                elevation: 2,
            },
            touchable: {
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.2,
                shadowRadius: 1.41,
                elevation: 2,
            },
        },
    }),
});
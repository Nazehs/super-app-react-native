
import React, { ReactNode } from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { Box, Text } from '../../atom';
import { fontFamily, getFontSizeByWindowHeight as gpsh, getFontSizeByWindowWidth as gpsw } from '../../../style/theme';
import ConfirmItemDetail from './TransactionItemDetail';
import ShadowCard from '../Card/ShadowCard';

const TransactionDetailsCard = ({
    children,
    total,
    containerStyle,
    titleStyle,
    valueStyle,
    bottomValueStyle,
    bottomTitleStyle,
    topData,
    bottomData,
    conditonalData,
    active = false,
    onPress,
}: {
    topData: object;
    bottomData: object;
    conditonalData?: object;
    active?: boolean;
    onPress?: () => any;
    total?: string;
    children?: ReactNode;
    containerStyle?: StyleProp<ViewStyle>;
    titleStyle?: StyleProp<TextStyle>;
    bottomTitleStyle?: StyleProp<TextStyle>;
    valueStyle?: StyleProp<TextStyle>;
    bottomValueStyle?: StyleProp<TextStyle>;
}) => {

    return (
        <ShadowCard
            noShadow={false}
            style={[
                containerStyle,
                {
                    borderRadius: gpsw(9),
                    paddingHorizontal: gpsw(12),
                    gap: gpsh(10),
                    paddingVertical: gpsh(20),
                },
            ]}>
            <Box
                style={[
                    containerStyle,
                    {
                        paddingHorizontal: gpsw(12),
                        gap: gpsh(10),
                    },
                ]}>
                {Object.entries(topData).map(([title, value]) => {
                    if (!value || value === '') return;
                    return (
                        <ConfirmItemDetail
                            key={title}
                            title={`${title}:`}
                            value={value}
                            {...{ titleStyle, valueStyle }}
                        />
                    );
                })}
                {conditonalData && (
                    <Box
                        flexDirection={'row'}
                        style={[{ justifyContent: 'space-between' }]}>
                        <Box width={gpsw(103)} mr={'hsm'}>
                            <Text style={[titleStyle]} variant={'regular12'}>
                                Include withdraw charges for the recipients
                            </Text>
                        </Box>
                    </Box>
                )}
                {active &&
                    conditonalData &&
                    Object.entries(conditonalData).map(([title, value]) => {
                        return (
                            <ConfirmItemDetail
                                key={title}
                                title={`${title}:`}
                                value={value}
                                {...{ titleStyle, valueStyle }}
                            />
                        );
                    })}
            </Box>
            <Box
                gap={'vsm'}
                style={{
                    backgroundColor: '#F2F2F2',
                    paddingVertical: 12,
                    paddingHorizontal: gpsw(12),
                    borderRadius: gpsh(9),
                }}>
                {Object.entries(bottomData).map(([title, value]) => {
                    if (!value || value === '') return;
                    return (
                        <ConfirmItemDetail
                            key={title}
                            title={`${title}:`}
                            value={`GHS ${value}`}
                            titleStyle={[
                                bottomTitleStyle,
                                title.toLowerCase() == 'total' && {
                                    fontSize: gpsw(16),
                                    lineHeight: gpsh(20),
                                    fontFamily: fontFamily('Medium'),
                                },
                            ]}
                            valueStyle={[
                                bottomValueStyle,
                                title.toLowerCase() == 'total' && {
                                    fontSize: gpsw(16),
                                    lineHeight: gpsh(20),
                                },
                            ]}
                        />
                    );
                })}
            </Box>
            {children}
        </ShadowCard>
    );
};

export default TransactionDetailsCard;

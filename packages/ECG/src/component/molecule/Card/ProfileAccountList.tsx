import TouchableOpacity from '@/component/atom/TouchableOpacity';
import icons, { SvgIconType } from '@/constants/icon';
import { View } from 'react-native';
import {
    fontFamily,
    getFontSizeByWindowHeight as gsh,
    getFontSizeByWindowWidth as gsw,
} from '@/style/theme';
import { Theme } from '@/typings/globalTheme';
import { Box, Icon, Text } from '@atom';
import { useTheme } from '@shopify/restyle';
import Card from './Card';
import { ReactNode } from 'react';
import { globalMoMoBlue } from '@/style-dictionary-dist/momoStyle';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { gpsh, gpsw } from '@/utils/parseTokenStyle';

type QuickActionType = {
    title?: string;
    subtitle?: string;
    icon?: SvgIconType;
    renderLeftIcon?: () => ReactNode;
    bg?: 'white' | 'colored';
    width?: number;
    disabled?: boolean;
    onPress?: () => void;
    variant?: 'shadow' | 'noShadow';
};

const ProfileAccountList = ({
    title,
    subtitle,
    icon,
    bg,
    disabled,
    onPress,
    width,
    variant = 'noShadow',
    renderLeftIcon
}: QuickActionType) => {
    const { colors, spacing } = useTheme<Theme>();
    const { RightIcon, SettingsIcon } = icons;
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={{
                borderRadius: 20,
                gap: 10,
                width: widthPercentageToDP('90%'),
                height: heightPercentageToDP('8%'),
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 25,
                marginVertical: 3,
                // paddingVertical: 10,
                borderWidth: 2,
                borderColor: '#E8E8E880'
            }}
        >
            <View style={{ width: widthPercentageToDP('55%') }}>
                <Text style={{ 
                    fontFamily:'MTNBrighterSans-Bold',
                    fontWeight: "500",
                    textAlign: 'left', 
                    fontSize: gpsh("12"), 
                    color: colors.black
                }}>{title}</Text>
            </View>
            <View style={{
                width: widthPercentageToDP('20%'),
                justifyContent: 'flex-start'
            }}>
                <View style={{
                    backgroundColor: '#FFFFFF',
                    borderWidth: 1,
                    borderColor: '#5CB85C',
                    borderRadius: 18,
                    padding: 2,
                }}>
                    <Text style={{ 
                        fontFamily:'MTNBrighterSans-Sans',
                        fontWeight: "500",
                        color: '#5CB85C', 
                        padding: 3, 
                        paddingHorizontal: 8
                    }}>{subtitle}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default ProfileAccountList;


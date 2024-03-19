import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Images from '@/utils/Images';
import { navigations } from '@/utils/const';
import Button from '@atom/Button/Button';
import { colors } from '@/utils/colors';
import { getFontSizeByWindowWidth } from '@/style/theme';
import { gpsh } from '@/utils/parseTokenStyle';

type NavigationProp = {
    navigate: (screen: string) => void;
    providerName: string;
    amount: number;
};

const PendingPaymentScreen = ({ route }: any) => {
    const navigation = useNavigation<NavigationProp>();
    const { providerName, totalAmount } = route.params;
    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true);
        return () => backHandler.remove();
    }, []);

    const modDes = "Processing your #input1# #input2#. You'll get an SMS when done. No SMS? Call [number].";
    var input1Data = "GHS " + totalAmount;
    const replacedData = modDes
        .replace('#input1#', input1Data)
        .replace('#input2#', "Electricity payment");

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Image source={Images.PENDING_PAYMENT_IMAGE} resizeMode="contain" style={styles.imageBox} />
                <Text
                    style={{
                        fontWeight: '500',
                        fontSize: getFontSizeByWindowWidth(22),
                        lineHeight: getFontSizeByWindowWidth(28.6),
                        color: '#004F71',
                        fontFamily: 'MTNBrighterSans-Medium',
                        marginBottom: gpsh('10'),
                        textAlign: 'center',
                    }}>
                    Payment Done!
                </Text>
                {/* <Text
                style={{
                  fontWeight: '400',
                  fontSize: gsw(16),
                  fontStyle: 'normal',
                  lineHeight: gsw(24),
                  color: '#5F5F5F',
                  fontFamily: 'MTNBrighterSans-Regular',
                  marginBottom: gpsh('10'),
                  textAlign: 'center',
                }}>
                {replacedData}
              </Text> */}
                <Text style={styles.detailsText}>
                    Received your
                    <Text style={styles.boldText}> GHS {totalAmount} </Text>
                    payment of
                    <Text style={styles.boldText}> bill name. </Text>
                    You'll get an SMS when done.
                    No SMS? Call [number].
                </Text>
                <View style={styles.doneButton}>
                    <Button
                        label={"Done"}
                        size="fullWidth"
                        variant="primary"
                        height={50}
                        onPress={() => navigation.navigate("MainHome", { paymentDone: 1 })}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    bgImage: {
        width: '100%',
        height: heightPercentageToDP('40%'),
    },
    contentContainer: {
        alignItems: 'center',
        justifyContent: 'space-around',
        width: widthPercentageToDP('85%'),
        alignSelf: 'center',
        paddingVertical: 40,
        paddingHorizontal: 10,
    },
    imageBox: {
        width: widthPercentageToDP('90%'),
        height: heightPercentageToDP('40%'),
        marginTop: -heightPercentageToDP('35%'),
    },
    processingText: {
        fontSize: 22,
        color: colors.primary,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10
    },
    detailsText: {
        fontWeight: '400',
        fontSize: getFontSizeByWindowWidth(16),
        fontStyle: 'normal',
        lineHeight: getFontSizeByWindowWidth(24),
        color: '#5F5F5F',
        fontFamily: 'MTNBrighterSans-Regular',
        marginBottom: gpsh('10'),
        textAlign: 'center',
        // textAlign: 'justify'
    },
    doneButton: {
        marginVertical: heightPercentageToDP("10%"),
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        backgroundColor: colors.primary,
    },

    boldText: {
        fontWeight: 'bold',
        fontFamily: 'MTNBrighterSans-Medium',
    },
});

export default PendingPaymentScreen;

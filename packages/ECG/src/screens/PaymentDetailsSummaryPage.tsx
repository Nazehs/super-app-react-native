import { StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import TransactionDetailsCard from '@molecule/Transactions/TransactionDetailsCard';
import { useGetPrePaymentDataMutation } from '@/api/Data/PrePayment';
import { errorDataUpdate } from '@/features/auth/authSlice';
import { navigations } from '@/utils/const';
import { useGetPaymentDataMutation } from '@/api/Data/Payment';
import { RootState, useTypedDispatch, useTypedSelector } from '@/store/store';
import { AlertMessageType, selectMessage } from '@/features/alert/alertSlice';
import ScrollView from '@atom/ScrollView';
import Loader from '@molecule/Loaders/Loader';
import Images from '@/utils/Images';
import Button from '@atom/Button/Button';
import Alert from '@molecule/Alerts/Alert';
import ReusableModal from '@molecule/Loaders/ReusableModal';
import BackHeadingX from '@molecule/Header/BackHeadingX';
import { SafeAreaContainer } from '@atom';
import { colors } from '@/utils/colors';
import Container from '@atom/Container';


type NavigationProp = {
    navigate: (screen: string) => void;
}

type ReusableModalProps = {
    title: string;
    description: string;
    manageLink?: string;
};

const PaymentDetailsSummaryPage = ({ route }: any) => {
    const { meterNumber, billType, providerName, mobileNumber, billName, dueAmount, fees, sessionId, maxBalance } = route.params;
    useEffect(() => {
        getCalution();
        // return () => {
        //     setReachLimit(false);
        //     setReachLimit(false);
        //     setShowLimitModal(false);
        //     navigation.setParams({});
        // };
    }, [dueAmount]);
    const message = useTypedSelector(selectMessage);
    const typedDispatch = useTypedDispatch();
    const dispatch = useDispatch();

    const DURATION = 2000;
    const [showBottomSheet, setBottomSheetVisible] = useState(false);
    const [showLimitModal, setShowLimitModal] = useState(false)
    // const { data, error, isLoading, makeRequest } = useApi<string>()
    const [currentLimitData, setCurrentLimitData] = useState<ReusableModalProps>();
    const [isLoading, setIsLoading] = useState(false);
    const navigation = useNavigation<NavigationProp>();


    const getCalution = async () => {
        const max = parseInt(maxBalance);
        if (parseInt(dueAmount) < parseInt(maxBalance)) {
            setReachLimit(false);
            setReachLimit(false);
            setShowLimitModal(false);
            getPrepaymentDatas(sessionId);
        } else {
            setReachLimit(false);
            setShowLimitModal(true);
            setCurrentLimitData(limitData[limitType]);
        }
    }


    const [limitType, setLimitType] = useState<'dailyLimit' | 'monthlyLimit' | 'noEnoughMoney'>('noEnoughMoney');
    const [exceededAmount, setExceededAmount] = useState(maxBalance);
    const { errorStatus, errorMessage } = useSelector((state: RootState) => state.auth)
    const [reachLimit, setReachLimit] = useState(false);
    const limitData = {
        dailyLimit: {
            title: 'Daily limit reached',
            description: `Exceeded your daily limit by GHS ${exceededAmount}`,
            manageLink: 'Manage limit?'
        },
        monthlyLimit: {
            title: 'Monthly limit reached',
            description: `Exceeded your monthly limit by GHS ${exceededAmount}`,
            manageLink: 'Manage limit?'
        },
        noEnoughMoney: {
            title: 'Not enough money',
            description: `You need more money in this account`,
            manageLink: 'Top up account?'
        }
    };
    const topData = {
        'Bill name': billName,
        'Mobile number': mobileNumber,
        'Meter number': meterNumber,
        'Provider name': providerName,
        'Bill type': billType,
    };


    const [getPrePaymentData, { isSuccess }] = useGetPrePaymentDataMutation();
    const [bottomData, setBottomData] = useState({
        Amount: dueAmount,
        Fees: fees,
        Tax: '0.00',
        get Total() {
            const tot = parseInt(this.Amount) + parseInt(this.Fees) + parseInt(this.Tax)
            return tot.toFixed(2);
        }
    })


    const getPrepaymentDatas = async (sessionId) => {
        try {
            let getData = await getPrePaymentData({
                Cookie: sessionId,
                billType: "ECG",
                accountNumber: meterNumber,
                paymentServiceName: "electricity",
                currency: "GHS",
                amount: dueAmount
            }).unwrap();
            if (getData?.statusCode == 200) {
                const bottomda = {
                    Amount: dueAmount,
                    Fees: fees,
                    Tax: getData?.result?.taxAmount ? getData?.result?.taxAmount : '0',
                    get Total() {
                        const tot = parseInt(this.Amount) + parseInt(this.Fees) + parseInt(this.Tax)
                        return tot.toFixed(2);
                    }
                };
                setBottomData(bottomda);
                console.log("+++++++==", getData?.result?.taxAmount);
            } else {
                setIsLoading(false);
            }
        } catch (e) {
            setIsLoading(false);
        }
    }


    const [getPaymentData] = useGetPaymentDataMutation();

    useEffect(() => {
        if (errorMessage == 500) {
            setIsLoading(false);
        } else if (errorMessage == null) {
            setIsLoading(false);
            dispatch(errorDataUpdate({
                errorStatus: false,
                errorMessage: null
            }))
        }
    }, [errorStatus])

    const onButtonClick = async () => {
        try {
            setIsLoading(!isLoading);
            const billNameMessageInfo: AlertMessageType = {
                message: 'This favourite has already been saved',
                duration: DURATION,
                type: 'info',
                close: false,
            };
            const params = {
                providerName,
                totalAmount: bottomData.Total,
            }

            if (!isLoading) {
                // let result = await getPaymentData({
                //     billType: "ECG",
                //     accountNumber: meterNumber,
                //     paymentServiceName: "electricity",
                //     currency: "GHS",
                //     amount: bottomData.Total
                // }).unwrap();
                // setIsLoading(!isLoading);
                // if (result?.statusCode == 200) {
                navigation.navigate(navigations.PendingPaymentPage, params);
                // }
            }



            // setLimitType('dailyLimit')
            // typedDispatch(addMessage(billNameMessageInfo));
            // setCurrentLimitData(limitData[limitType]);
            // setShowLimitModal(true);
            // setExceededAmount(10000);
            // makeRequest('getEndpoint');
            // console.log("SUBMIT", params)
            // if (data && !isLoading) {
            // navigation.navigate(navigations.PendingPaymentPage, params);
            // }
        } catch (error) {
            console.log('Mobile Number Api Call Error....')
        }
    };


    return (
        <SafeAreaContainer>
            <BackHeadingX title="Payment Details" />
            <Container statusBarColor={colors.primary}>
                <ScrollView contentContainerStyle={styles.container}>
                    {isLoading && <Loader open={isLoading} />}
                    {/* {showLimitModal && currentLimitData && <ReusableModal
                    isVisible={showLimitModal}
                    onRequestClose={() => { setShowLimitModal(false); }}
                    title={currentLimitData.title}
                    message={currentLimitData.description}
                    iconSource={Images.WARNING_ICON_WHITE_IMAGE}
                    manageLinkText={currentLimitData.manageLink}
                    onManageLinkPress={() => {
                        setShowLimitModal(false);
                        setBottomSheetVisible(true)
                    }}
                    closeIconSource={Images.CLOSE_ICON_IMAGE}
                />} */}
                    <TransactionDetailsCard {...{ topData, bottomData }} />
                    <View style={styles.buttonContainer}>
                        <Button
                            label={"Pay"}
                            variant="primary"
                            bg={'momoBlue'}
                            size="fullWidth"
                            height={50}
                            style={styles.payButton}
                            onPress={onButtonClick}
                            disabled={reachLimit}
                        />
                        <Button
                            label={"Edit"}
                            size="fullWidth"
                            height={50}
                            variant="secondary"
                            style={styles.editButton}
                            onPress={() => navigation.navigate(navigations.BillPaymentDetailsPage, { paymentDone: 0 })}

                        />
                    </View >
                    {message.length !== 0 && <Alert />}

                    {/* <UpgradeProfileModal isVisible={showBottomSheet} onClose={() => setBottomSheetVisible(false)} /> */}
                </ScrollView>
            </Container>
        </SafeAreaContainer >
    );
};


const styles = StyleSheet.create({
    payButton: {
        height: heightPercentageToDP('12%'),
        justifyContent: 'center',
        paddingHorizontal: heightPercentageToDP('20'),
        width: widthPercentageToDP("100%")
    },
    editButton: {
        justifyContent: 'center',
        paddingHorizontal: heightPercentageToDP('20'),
        width: widthPercentageToDP("100%")
    },
    container: {
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        backgroundColor: "white",
        padding: 20,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'transparent',
        paddingHorizontal: 20,
        paddingBottom: 30,
        display: 'flex',
        gap: 12,
        flexDirection: 'column',
        width: widthPercentageToDP("100%"),
    },
});

export default PaymentDetailsSummaryPage;

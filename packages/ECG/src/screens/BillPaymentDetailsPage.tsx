import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, KeyboardAvoidingView, ScrollView, TouchableOpacity } from 'react-native';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import strings from '../constants/fixtures/index.json';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { useDispatch, useSelector } from 'react-redux';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import BackHeadingX from '@molecule/Header/BackHeadingX';
import CheckBox from '@molecule/Checkbox/CheckBox';
import Container from '@atom/Container';
import { useGetMeterDataMutation } from '@/api/Data/GetMeter';
import { RootState } from '@/store/store';
import { navigations } from '@/utils/const';
import { Box, Button, SafeAreaContainer, Text } from '@atom';
import Loader from '@molecule/Loaders/Loader';
import Overlay from '@molecule/Overlay';
import RadioButton from '@molecule/RadioButton';
import { errorDataUpdate } from '@/features/auth/authSlice';
import { colors } from '@/utils/colors';
import RHFInput from '@molecule/FloatingLabelInput/RHFInput';
import { gpsh, gpsw } from '@/utils/parseTokenStyle';
import DropdownSearch from '@molecule/Dropdown/DropdownSearch';
import renderDropdownItem from '@molecule/Dropdown/DropdownItem/renderDropdownItem';
import useGetBalance from '@/hooks/useGetBalance';

const accountPaymentSchema = z.object({
  mobileNumber: z
    .string()
    .nonempty({ message: 'This field cannot be empty' })
    .min(12, 'Please enter a valid Mobile number'),
  billName: z.string().optional(),
  amount: z
    .string()
    .nonempty({ message: 'Please enter an amount' })
    .regex(/^[1-9]\d*(\.\d+)?$/, 'Please provide a valid amount'),
});

type NavigationProp = {
  navigate: (screen: string) => void;
};

type meterNumberScreenProps = {
  navigation: NavigationProp;
};

type UserData = {
  mobileNumber: string;
  billName?: string;
  billType: string;
  amount: string;
};

const BillPaymentDetailsPage = ({ route }) => {
  const navigation = useNavigation<NavigationProp>();
  const [profileLimit, setProfileLimit] = useState(3000000);
  const [dailyLimit, setDailyLimit] = useState(15000);
  const [monthlyLimit, setMonthlyLimit] = useState(15000);
  const [items, setItems] = useState([
    {
      label: 'Postpaid',
      value: 'Postpaid',
      id: 1,
      selected: true,
    },
    {
      label: 'Prepaid',
      value: 'Prepaid',
      id: 2,
      selected: false,
    },
  ]);
  const dispatch = useDispatch();
  const [errorMsg, setErrorMsg] = useState('');
  // const { error, isLoading, makeRequest } = useApi<string>();

  const formData: UserData = useSelector(
    (state: RootState) => state.formData.formData,
  );

  const {
    control,
    handleSubmit,
    reset,
    watch,
    setError,
    clearErrors,
    trigger,
    formState: { errors, isValid },
  } = useForm<UserData>({
    resolver: zodResolver(accountPaymentSchema),
    mode: 'onBlur',
    defaultValues: { mobileNumber: '', billName: '', amount: '', billType: '' },
  });

  const { errorStatus, errorMessage } = useSelector(
    (state: RootState) => state.auth,
  );
  const mobileNumberValue = watch('mobileNumber');
  const billNameValue = watch('billName');
  const amountValue = watch('amount');
  const billType = watch('billType');
  const [selectedBillType, setSelectedBillType] = useState<any>(
    formData?.billType,
  );
  const [isLoading, setIsLoading] = useState(false);
  const handleBillTypeSelection = (selectedOption: any) => {
    setSelectedBillType(selectedOption);
  };
  const [saveBill, setSaveBill] = useState(false);
  const [showMeterInput, setShowMeterInput] = useState(false);
  const [showMeterSelectModal, setShowMeterSelectModal] = useState(false);
  const [getMeterData, { data }] = useGetMeterDataMutation();

  const [meterData, setMeterData] = useState();
  const [getMeterBalance, setGetMeterBalance] = useState();
  const [callApiMeter, setCallApiMeter] = useState(false);

  // const getCurrencyForMobileNumber = (state, mobileNumber) => {
  //   const balanceKey = `getBalance({\"mobileNumber\":\"${mobileNumber}\"})`;
  //   const balanceData = { currency: state.queries[balanceKey]?.data?.result?.currency, amount: state.queries[balanceKey]?.data?.result?.amount };

  //   return balanceData || 'Currency not found';
  // };

  // const { userDetails: { mobileNumber, countryCode, currency }, accountToken } = useSelector((state) => state.auth);
  // console.log("userDetails => auth ", JSON.stringify({ accountToken, countryCode, mobileNumber, currency }, null, 2))
  // const queries = useSelector((state) => state.nodeApi);
  // console.log("userDetails => nodeApi ", JSON.stringify({ result: getCurrencyForMobileNumber(queries, mobileNumber) }, null, 2));
  // const { balanceData = {} } = useGetBalance();
  // console.log("userDetails => balanceData ", JSON.stringify(balanceData?.result, null, 2));
  const options = [
    {
      label: 'P201233671',
      accountname: 'TORTO ADAI FELICIA',
      accounttype: 'Nuri',
      extrainfo: '',
    },
    {
      label: 'P301233671',
      accountname: 'TORTO ADAI FELICIA',
      accounttype: 'Nuri',
      extrainfo: '',
    },
    {
      label: 'P301233671',
      accountname: 'TORTO ADAI FELICIA',
      accounttype: 'Nuri',
      extrainfo: '',
    },
    {
      label: 'P301233671',
      accountname: 'TORTO ADAI FELICIA',
      accounttype: 'Nuri',
      extrainfo: '',
    },
  ];
  const callMeterData = async (num: string) => {
    console.log('-------------------->>>>>> Calling Meter now');
    setIsLoading(true);

    try {
      const data: any = await getMeterData({
        Cookie: accountToken,
        idVer: num,
      }).unwrap();

      console.log('-------------------->>>>>> Meter', JSON.stringify(data));

      if (data?.statusCode === 200) {
        if (data?.result?.accounts?.length) {

          const accountOptions = data?.result?.accounts?.map((account: any) => {
            return {
              label: account?.accountnumber,
              ...account
            }
          });
          setMeterData(accountOptions);
        }

        console.log('-------------------->>>>>> Meter', JSON.stringify(data?.result?.accounts));
        setGetMeterBalance(data?.result?.accountBalance?.amount);
      } else {
        alert('Received unexpected response from the server.');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      console.trace(error);
      alert('Failed to retrieve  data. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };


  useEffect(() => {
    if (errorMessage == 500) {
      setIsLoading(false);
      setError('mobileNumber', {
        type: 'custom',
        message: 'Enter a valid number',
      });
    } else if (errorMessage == null) {
      setIsLoading(false);
      setError('mobileNumber', { type: 'custom', message: '' });
      dispatch(
        errorDataUpdate({
          errorStatus: false,
          errorMessage: null,
        }),
      );
    }
  }, [data, errorStatus]);


  const [selectedOption, setSelectedOption] = useState(
    options[0]?.accountnumber,
  );

  const handleSelectOption = (value: any) => {
    console.log("selected Account ", handleSelectOption)
    setSelectedOption(value);
    setShowMeterSelectModal(false);
    setShowMeterInput(true);
    // callMeterData(value);

  }

  const handleMeterNumber: SubmitHandler<UserData> = async formData => {
    setMeterData(options);
    if (!showMeterInput) {
      setShowMeterSelectModal(!showMeterSelectModal);
    } else {
      setIsLoading(!isLoading);
      if (!isLoading) {
        const params = {
          meterNumber: selectedOption,
          providerName: 'Provider Name',
          billName: formData.billName || 'Default Bill Name',
          dueAmount: amountValue,
          billType: formData.billType || 'Bill Type Name',
          mobileNumber: mobileNumberValue,
          fees: '0.00',
          maxBalance: getMeterBalance,
        };
        setIsLoading(!isLoading);
        if (params) {
          navigation.navigate(navigations.PaymentDetailsSummaryPage, { ...params });
        }
      }
      // try {
      //     formData.billType = selectedBillType;
      //     const params = {
      //         meterNumber: formData.mobileNumber,
      //         providerName: 'Ibadan Electricity (IBEDC)',
      //         billName: formData.billName || 'Default Bill Name',
      //         dueAmount: amountValue,
      //         billType: selectedBillType
      //     }
      //     console.log("==============", params)
      //     // if (isValid) {
      //     //     await makeRequest('getEndpoint');
      //     //     if (data && !isLoading) {
      //     //         navigation.navigate(navigations.PaymentDetailsSummaryPage, { ...params });
      //     //     }
      //     // }
      // } catch (error: any) {
      //     setErrorMsg(error.message || 'An error occurred');
      // }
    }
  };

  const handleAmountChange = (val: string) => {
    clearErrors('amount');
    const numericValue = parseFloat(val);
    if (numericValue > dailyLimit && numericValue < monthlyLimit) {
      setError('amount', {
        type: 'manual',
        message: 'Exceeds daily limit by GHS 15000',
      });
    } else if (numericValue > monthlyLimit && numericValue < profileLimit) {
      setError('amount', {
        type: 'manual',
        message: 'Enter amount less than GHS 50 000',
      });
    } else if (numericValue > profileLimit) {
      setError('amount', { type: 'manual', message: 'Exceeds profile limit' });
    } else {
      clearErrors('amount');
    }
  };

  const isButtonDisabled =
    errors.amount ||
    !mobileNumberValue ||
    !amountValue ||
    !billType ||
    (saveBill && !billNameValue);

  // useEffect(() => {
  // try {
  //     const isButtonDisabled = errors.amount || (!mobileNumberValue || !amountValue || !selectedBillType) || (saveBill && !billNameValue);
  //     const paymentsDone = route?.params?.paymentDone;
  //     alert(paymentsDone)
  //     if (paymentsDone == "1") {
  //         setShowMeterInput(false);
  //         setGetMeterBalance('');
  //         reset({
  //             mobileNumber: formData.mobileNumber,
  //             billName: formData.billName,
  //             amount: formData.amount,
  //             billType: formData.billType
  //         });
  //         setSaveBill(!!formData.billName);
  //         const updatedItemLists = items.map(item => ({
  //             ...item,
  //             selected: item.value === formData.billType
  //         }));
  //         setItems(updatedItemLists);
  //         const foundBillType = updatedItemLists.find((list) => list.value === formData.billType);
  //         setSelectedBillType(foundBillType ? foundBillType.value : null);
  //     }
  // } catch (error) {
  // }
  // }, [formData, reset]);

  // useFocusEffect(
  //   React.useCallback(() => {
  //     setIsLoading(false);
  //     try {
  //       const isButtonDisabled =
  //         errors.amount ||
  //         !mobileNumberValue ||
  //         !amountValue ||
  //         !billType ||
  //         (saveBill && !billNameValue);
  //       const paymentsDone = route?.params?.paymentDone;
  //       if (paymentsDone === '1') {
  //         setShowMeterInput(false);
  //         setGetMeterBalance(undefined);
  //         reset({
  //           mobileNumber: formData.mobileNumber,
  //           billName: formData.billName,
  //           amount: formData.amount,
  //           billType: formData.billType,
  //         });
  //         setSaveBill(!!formData.billName);
  //         const updatedItemLists = items.map(item => ({
  //           ...item,
  //           selected: item.value === formData.billType,
  //         }));
  //         setItems(updatedItemLists);

  //         const foundBillType = updatedItemLists.find(
  //           list => list.value === formData.billType,
  //         );

  //         setSelectedBillType(foundBillType ? foundBillType.value : null);
  //       }
  //     } catch (error) { }
  //     return () => {
  //       navigation.setParams({ paymentsDone: 0 });
  //     };
  //   }, [route?.params?.paymentDone]),
  // );

  const showMeterModalHandler = () => {
    setShowMeterSelectModal(!showMeterSelectModal);
    // setShowMeterInput(!showMeterInput);
  };

  const confirmSelectHandler = () => {
    setShowMeterInput(true);
    setShowMeterSelectModal(!showMeterSelectModal);
  };

  const getVerificationHandler = (e: any) => {
    const cleanedMobileNumber = e?.replace(/\s/g, '');
    if (cleanedMobileNumber?.length === 10) {
      const truncatedMobileNumber = cleanedMobileNumber.slice(1);
      const newMobileNumber = '233' + truncatedMobileNumber;
      if (newMobileNumber && !callApiMeter) {
        console.log('LENGTH =>>>> ', { meterData, cleanedMobileNumber, newMobileNumber });
        setCallApiMeter(true);
        callMeterData(newMobileNumber);
      }
    } else {
      setCallApiMeter(false);
      console.log('LENGTH ERROR - getVerificationHandler =>>>> ');
      dispatch(
        errorDataUpdate({
          errorStatus: false,
          errorMessage: null,
        }),
      );
    }

  };

  return (
    <SafeAreaContainer>
      <BackHeadingX title="Electricity" />
      {isLoading && <Loader open={isLoading} />}
      <Container statusBarColor={colors.primary}>
        <KeyboardAvoidingView style={{ flex: 1, zIndex: -1 }} behavior="height">
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1 }}
            style={{ marginBottom: 35, height: heightPercentageToDP('85%') }}>
            <Box style={{ paddingLeft: gpsh('24'), paddingRight: gpsh('24') }}>
              <View style={{ marginTop: gpsh('24'), zIndex: -1 }}>
                {/* <Text style={{ color: '#000' }}>{
                            // !isValid ? "false" : "true" ||
                            // errors.amount? "false" : "true" ||
                            (!mobileNumberValue? "false" : "true" ||
                              !amountValue?"false" : "true" ||
                              !selectedBillType?"false" : "true") ||
                              (saveBill && !billNameValue)}</Text> */}

                <Controller
                  control={control}
                  render={({
                    field: { onChange, ref, value },
                    fieldState: { error },
                  }) => {
                    return (
                      <DropdownSearch
                        renderItem={renderDropdownItem}
                        data={items}
                        required={true}
                        label="Bill type"
                        onSelect={(onChange)}
                        ref={ref}
                        value={value}
                        hasError={error}
                      />
                    );
                  }}
                  name={'billType'}
                />
              </View>
              <View style={{ marginTop: gpsh('24'), zIndex: -2 }}>
                <RHFInput
                  label={strings?.body?.placeHolders?.mobileNumber}
                  name="mobileNumber"
                  rightComponent={'PersonPlus'}
                  animationDuration={5}
                  control={control}
                  required={true}
                  number={true}
                  maxLength={12}
                  keyboardType="number-pad"
                  mask="000 000 0000"
                  onChange={val => {
                    getVerificationHandler(val?.nativeEvent?.text);
                  }}
                />
              </View>
              {/* {showMeterInput &&
                <View style={{ marginTop: gpsh('24'), zIndex: -1 }}>
                  <BusinessDropdownModal
                    placeholder="Meter number"
                    required={true}
                    itemList={items}
                    defaultValue={selectedOption}
                    onSelected={handleBillTypeSelection}
                    showMeterModalHandler={showMeterModalHandler}
                  />
                </View>
              } */}
              <View style={{ marginTop: gpsh('24'), zIndex: -2 }}>
                <RHFInput
                  name={'amount'}
                  label={strings?.body?.placeHolders?.amount}
                  // showBalance={balanceData?.result ? 1 : 0}
                  // max={balanceData?.result?.amount}
                  control={control}
                  labelBackgroundColor="white"
                  kurrency={'GHS'}
                  keyboardType="decimal-pad"
                  alignRight
                />
              </View>
              <View
                style={[
                  { marginTop: gpsh('24'), zIndex: -2 },
                ]}>
                <CheckBox
                  disabled={false}
                  checked={saveBill}
                  label="Save this bill"
                  onChange={() => setSaveBill(!saveBill)}
                />
              </View>
              {saveBill && (
                <View style={{ marginTop: gpsh('24'), zIndex: -2 }}>
                  <RHFInput
                    label={strings?.body?.placeHolders?.billName}
                    name="billName"
                    animationDuration={5}
                    control={control}
                    required={true}
                    maxLength={35}
                    keyboardType="default"
                  />
                </View>
              )}
            </Box>
          </ScrollView>
        </KeyboardAvoidingView>
        <Overlay
          swipe
          open={showMeterSelectModal}
          setModalVisible={() => showMeterModalHandler}>
          <Box
            style={{
              marginTop: 'auto',
              borderTopRightRadius: 18,
              borderTopLeftRadius: 18,
            }}
            bg={'white'}
            px={'hm'}
            pb={'vxl'}
            py={'vm'}
            justifyContent={'center'}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'stretch',
              }}>
              <Text style={styles.titleText}>Choose which account to pay</Text>
              <TouchableOpacity onPress={showMeterModalHandler}>
                <Text>X</Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginVertical: gpsh('25'), alignItems: 'center' }}>
              <RadioButton
                options={meterData}
                selectedOption={selectedOption}
                handleSelection={handleSelectOption}
                showLabel
                containerStyle={{
                  width: gpsw('220'),
                  flexDirection: 'column',
                  // justifyContent: 'space-between',
                  // alignItems: 'stretch'
                }}
              />
            </View>
            <Box>
              <Box flex={1}>
                <Button
                  size="fullWidth"
                  label={'SELECT'}
                  variant="primary"
                  bg={'momoBlue'}
                  height={50}
                  disabled={false}
                  onPress={confirmSelectHandler}
                />
              </Box>
            </Box>
          </Box>
        </Overlay>
        <Box style={{ padding: 24 }}>
          <Button
            label={'Next'}
            variant="primary"
            bg={'momoBlue'}
            size="fullWidth"
            height={50}
            disabled={isButtonDisabled || errorStatus}
            onPress={handleSubmit(handleMeterNumber)}
          />
        </Box>
      </Container>
    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({
  singleDropdown: {
    zIndex: 9999,
    width: '100%',
    alignSelf: 'center',
  },
  warningText: {
    color: colors.red,
    alignSelf: 'flex-end',
    marginTop: gpsh('5'),
    marginBottom: gpsh('10'),
    fontFamily: 'MTN Brighter Sans',
  },
  userBalance: {
    alignSelf: 'flex-end',
    marginTop: gpsh('5'),
    marginBottom: gpsh('10'),
    fontFamily: 'MTN Brighter Sans',
    color: colors.black,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  inputContainer: {
    padding: 20,
    position: 'relative',
    paddingTop: gpsh('25'),
  },
  dropdown: {
    marginBottom: 15,
  },
  balanceText: {
    alignSelf: 'flex-end',
    color: colors.black,
    marginBottom: 15,
  },
  checkbox: {
    marginRight: 10,
  },
  titleText: {
    fontFamily: 'MTNBrighterSans-Medium',
    fontSize: gpsw('16'),
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: gpsh('24'),
    color: '#000000',
    marginTop: gpsh('-5'),
  },
});

export default BillPaymentDetailsPage;

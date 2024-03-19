import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParams = {
  Auth: NavigatorScreenParams<AuthStackParams>;
  Main: NavigatorScreenParams<MainDrawerParams>;
};

export type MainStackParams = {
  bottomtab: NavigatorScreenParams<BottomTabParams>;
  more: undefined;
  success: {
    data: {
      title: string;
      subTitle: string;
      navigateTo: string;
    };
  };
  switchaccountsim: undefined;
  momouser: undefined;
  banktransfer: undefined;
  // scanqr
  scanqr: undefined;
  kashmeform: undefined;
  kashme: undefined;
  paymerchantform: undefined;
  paymerchantconfirm: undefined;
  paymerchantstatus: undefined;
  tipmerchantform: undefined;
  tipmerchantconfirm: undefined;
  tipmerchantstatus: undefined;
  sendmomoform: undefined;
  sendmomoconfirm: undefined;
  sendmomostatus: undefined;
  cashoutform: undefined;
  cashoutconfirm: undefined;
  cashoutstatus: undefined;
  utilities: undefined;
  GhWater: undefined;
  EVD: undefined;
  ECG: undefined;
  // paymerchantconfirm: undefined;
  // paymerchantconfirm: undefined;
  // paymerchantconfirm: undefined;
  beneficiarydetailscreen: {
    data: {
      name: string;
      phoneNumber: string;
      transactionType: string;
      reason: string;
    };
  };
  airtimedetail: {
    data: {
      name: string;
      phoneNumber: string;
      transactionType: string;
      reason: string;
      totalCost: any;
      currency: any;
      type: string;
    };
  };
  // recentlypurchased: {
  //   tData: any;
  // };
  newmerchantconfirm: {
    data: {
      merchantName: string;
      merchantId: any;
      receiverNumber: any;
    };
  };
  recentlypurchasedconfirm: {
    data: {
      phoneNumber: string;
      transactionType: string;
      totalCost: any;
      currency: any;
      type: string;
      transactionDate: any;
      transactionId: any;
    };
  };
  merchantdetails: {
    data: {
      merchantName: string;
      merchantId: string;
      reference: string;
      merchantMM: any;
      receiverNumber: any;
    };
  };
  recentlypaidconfirm: {
    data: {
      date: string;
      name: string;
      merchantId: string;
      type: string;
      transactionId: string;
      fees: string;
      tax: string;
      amount: string;
    };
  };
  airtimemyself: undefined;
  airtimeothers: undefined;
  Reversalscreen: undefined;
  recentlypurchased: undefined;
  // recentlypurchasedconfirm: undefined;
  addnewmerchant: undefined;
  payagainmerchant: undefined;
  editmerchantdetails: undefined;
  // recentlypaidconfirm: undefined;
  // newmerchantconfirm: undefined;
  airtimereversaldetails: undefined;
  paybeneficiaryscreen: {
    name: string;
    phoneNumber: string;
    type: string;
    reason: string;
    tDetails?: boolean;
  };
  confirmpaymentscreen: {
    data: {
      name: string;
      phoneNumber: string;
      searchBank?: string;
      accountNumber?: string;
      amount: string;
      reason: string;
    };
  };
  momotransfer: {
    type: string;
  };
  paymentdetailscreen: {
    data: any;
  };
  statementscreen: undefined;
  transactionscreen: undefined;
  beneficiariesscreen: undefined;
  addbeneficiary: undefined;
  addfavourite?: any;
  beneficiarystatus: {
    pay?: boolean;
    flow: 'momuser' | 'bank';
    title: string;
    subtitle: string;
    edit?: boolean;
    accountNumber?: string;
    mobileNumber?: string;
    amount?: string;
    bank_name?: string;
    transactionId?: string;
    transactiontype?: string;
    date?: string;
    'Mobile number'?: string;
    'Recipient name'?: string;
    'Transaction type'?: string;
    Reason?: string;
  };
  recentlypaidtransactions: undefined;
  momofaourites: undefined;
  favouritedetail: {
    data?: any;
  };
  payfavourite: {
    data?: any;
    formData?: any;
  };
  confirmbeneficiarypayment: {
    data?: any;
    flow: 'momuser' | 'bank';
    formData?: any;
    mobileNumber?: any;
    other?: any;
  };

  //BANK TRANSFERS (BANKT TO MOMO)  (MOMO TO BANK) (OTHER BANKS)
  confirmbankservices: {
    datetime: string;
    transferType: string;
    bankName: string;
    accountNumber: string;
    reason: string;
    transactionId: string;
    amount: string;
    elevyCharges: string;
    fees: string;
    txFees: string;
  };
  banktomomo: undefined;
  paybanktomomo: {
    data: {
      bankName: string;
      accountNumber: string;
      bankCode: string;
      amount: string;
      reference: string;
    };
  };
  banktomomoconfirm: undefined;
  banktomomostatus: {
    status: 'success' | 'failure';
    data: {
      bank: string;
      accountNumber: string;
      fees: string;
      currency: string;
      amount: string;
      total: string;
      transactionTime: string;
      transactionId: string;
      paymentType: 'Bank To MoMo' | string;
      countryCode: string;
      senderName: string;
    };
  };
  momotobank: undefined;
  paymomotobank: {
    data: {
      bankName: string;
      accountNumber: string;
      bankCode: string;
      amount: string;
      reference: string;
    };
  };
  momotobankconfirm: undefined;
  momotobankstatus: {
    status: 'success' | 'failure';
    data: {
      bank: string;
      accountNumber: string;
      fees: string;
      currency: string;
      amount: string;
      total: string;
      transactionTime: string;
      transactionId: string;
      paymentType: 'MoMo To Bank' | string;
      countryCode: string;
      senderName: string;
    };
  };
  otherbanks: undefined;
  payotherbanks: {
    data: {
      bankName: string;
      accountNumber: string;
      bankCode: string;
      amount: string;
      reference: string;
    };
  };
  otherbanksconfirm: undefined;
  otherbanksstatus: {
    status: 'success' | 'failure';
    data: {
      bank: string;
      accountNumber: string;
      fees: string;
      currency: string;
      amount: string;
      total: string;
      transactionTime: string;
      transactionId: string;
      paymentType: 'MoMo To Bank' | string;
      countryCode: string;
      senderName: string;
    };
  };

  //scheduletransfer
  scheduletransfer: undefined;
  allactiveschedule: undefined;

  // BANK BENEFICIARIES
  bankfavouritedetail: {
    data?: any;
  };
  bankpayfavourite: {
    data?: any;
  };
  bankconfirmpayment: {
    data?: any;
  };
  bankfavourites: undefined;
  recentlybanktransactions: undefined;
  transactionbankdetails: {
    data: any;
  };
  bankaddfavourite?: any;
  recenttransactionscreen: undefined;
  transactiondetailscreen: any;
  approvals: undefined;
  approvalspendingdetail: undefined;
  approvalshistorydetail: undefined;
  transactdetails: {
    data: any;
  };
  addmoney: undefined;
  cashout: undefined;

  //BUNDLES
  bundlesRp: undefined;
  bundlesRpConfirm: undefined;
  bundledetail: {
    data: {
      name: string;
      phoneNumber: string;
      transactionType: string;
      reason: string;
    };
  };
  bundlesmyselfoptions: undefined;
  bundlesmyselfinternet: undefined;
  bundlesmyselfbroadband: undefined;
  bundlesmyselfconfirm: undefined;
  bundlesmyselfstatus: undefined;
  bundlesothers: undefined;
  bundlesothersoptions: undefined;
  bundlesothersinternet: undefined;
  bundlesothersbroadband: undefined;
  bundlesothersconfirm: undefined;
  bundlesothersstatus: undefined;

  //Create Voucher
  createvoucher: undefined;
  createvoucherconfirm: {
    name: string;
    phoneNumber: string;
    amount: string;
    secretCode: string;
    reason?: string;
    beneficiary: boolean;
  };
  createvoucherstatus: {
    status: 'success' | 'failure';
    data: {
      name: string;
      phoneNumber: string;
      amount: string;
      secretCode: string;
      reason?: string;
      beneficiary: boolean;
    };
  };
  paycreatevoucherfavourite: {
    name: string;
    phoneNumber: string;
  };
  createvoucherfavdetails: {
    data: any;
    other: any;
  };
  createvoucheraddfav: undefined;
  createvouchereditfav: {
    data: any;
  };
  createvoucherpayfav: {
    data: any;
  };
  createvoucherfavstatus: {
    flow: 'token' | string;
    title: string;
    subtitle: string;
    mobileNumber: string;
  };

  //other networks

  othernetworks: undefined;
  Network: undefined;
  othernetworksconfirm: undefined;

  // OTHERS
  viewlimits: undefined;
  walletlimit: undefined;
  // transfermomo: undefined
  // transferschedule: undefined
  // transferconfirmation: undefined
};

export type BottomTabParams = {
  Home: NavigatorScreenParams<HomeStackParams>;
  Transfers: NavigatorScreenParams<TransferStackParams>;
  'Scan QR': undefined;
  Market: NavigatorScreenParams<OffersStackParams>;
  More: NavigatorScreenParams<MoreStackParams>;
};

export type AuthStackParams = {
  Onboarding: undefined;
  login: undefined;
  signup: undefined;
  tandc: undefined;
  privacypolicy: undefined;
  SelectCountry: undefined;
  registerwallet: undefined;
  authstatus: {
    type?: 'success' | 'blockedotp' | 'blockedfraud' | 'nowallet';
  };
  simcard: undefined;
  otpscreen: undefined;
  otptimer: undefined;
  signin: undefined;
  siginpin: undefined;
  biometricenable: undefined;
  authscanqr: undefined;
  kashmeform: undefined;
  kashme: undefined;
  authmore: undefined;
  authapprovals: undefined;
  authapprovalpin: undefined;
  authapprovalstatus: undefined;
  test: undefined;
  authmarket: undefined;
  authagents: undefined;
  forgotpin: undefined;
  forgotpinOtp: undefined;
  forgotpinSetPin: {
    otp: string;
  };
  forgotpinStatus: {
    type?: 'success' | 'failure';
  };
};

// TABS
export type HomeStackParams = {
  homescreen: undefined;
  schedulepaymentscreen: undefined;
  ayoscreen: undefined;
  empty: undefined;
  bundles: undefined;
  transactionscreen: undefined;
  airtime: undefined;
  merchant: undefined;
  recentlypaiddetails: undefined;
  // transfers: undefined;
  bankservices: undefined;
};
export type TransferStackParams = {
  transfers: undefined;
  transactionshistoryscreen: undefined;
  beneficiariesscreen: undefined;
  empty: undefined;
};
export type ScanQRParams = {
  empty: undefined;
};
export type OffersStackParams = {
  empty: undefined;
};
export type MoreStackParams = {
  empty: undefined;
};

// DRAWERSCREENS

export type MainDrawerParams = {
  mainstack: NavigatorScreenParams<MainStackParams>;
  Settings: NavigatorScreenParams<SettingsParams>;
  Help: NavigatorScreenParams<HelpParams>;
  RecommendMomo: NavigatorScreenParams<RecommendMomoParams>;
};

export type SettingsParams = {
  SettingsMain: undefined;
  ChangePin: undefined;
  RecoverNumber: undefined;
  ChangePinStatus: undefined;
};

export type HelpParams = {
  HelpMain: undefined;
  LocalAgent: undefined;
};

export type RecommendMomoParams = {
  RecommendMain: undefined;
  ReferFriend: undefined;
  // LearnMore: undefined;
  RecommendStatus: undefined;
  RecommendSuccess: undefined;

  LearnMore: {
    data: {
      header: string;
      title: string;
      paragraph: string;
      paragraphTitle: string;
      paragraphPoints: any;
      buttonContent: any;
      footerText: any;
    };
  };
};

// Screens

// AUTH SCREENS
export type SelectCountryScreenProps = NativeStackScreenProps<
  AuthStackParams,
  'SelectCountry'
>;
export type OnboardScreenProps = NativeStackScreenProps<
  AuthStackParams,
  'Onboarding'
>;
export type AuthStatusScreenProps = NativeStackScreenProps<
  AuthStackParams,
  'authstatus'
>;

// DrawerScreens

type RecommendMomoParamList = CompositeScreenProps<
  DrawerScreenProps<MainDrawerParams>,
  NativeStackScreenProps<RootStackParams>
>;

export type ReferralScreenProps = CompositeScreenProps<
  NativeStackScreenProps<RecommendMomoParams, 'ReferFriend'>,
  RecommendMomoParamList
>;

export type LearnMoreScreenProps = CompositeScreenProps<
  NativeStackScreenProps<RecommendMomoParams, 'LearnMore'>,
  RecommendMomoParamList
>;

type NestedScreenProps = CompositeScreenProps<
  BottomTabScreenProps<BottomTabParams>,
  CompositeScreenProps<
    NativeStackScreenProps<MainStackParams>,
    CompositeScreenProps<
      DrawerScreenProps<MainDrawerParams>,
      NativeStackScreenProps<RootStackParams>
    >
  >
>;

// TransferScreen
export type TransferScreenProps = CompositeScreenProps<
  NativeStackScreenProps<TransferStackParams, 'transfers'>,
  NestedScreenProps
>;
export type HomeScreenProps = CompositeScreenProps<
  NativeStackScreenProps<HomeStackParams, 'homescreen'>,
  NestedScreenProps
>;

// TransferScreen
export type SchedulePaymentsScreenProps = CompositeScreenProps<
  NativeStackScreenProps<HomeStackParams, 'schedulepaymentscreen'>,
  NestedScreenProps
>;

// TransferScreen

type MainStackParamsList = CompositeScreenProps<
  DrawerScreenProps<MainDrawerParams>,
  NativeStackScreenProps<RootStackParams>
>;
export type MoMoUserScreenProps = CompositeScreenProps<
  NativeStackScreenProps<MainStackParams, 'momouser'>,
  MainStackParamsList
>;

export type SuccessScreenProps = CompositeScreenProps<
  NativeStackScreenProps<MainStackParams, 'success'>,
  MainStackParamsList
>;

export type BankTransferScreenProps = CompositeScreenProps<
  NativeStackScreenProps<MainStackParams, 'banktransfer'>,
  MainStackParamsList
>;

export type BenefeciaryDetailScreenProps = CompositeScreenProps<
  NativeStackScreenProps<MainStackParams, 'confirmbeneficiarypayment'>,
  MainStackParamsList
>;
export type BeneficiaryStatusScreenProps = CompositeScreenProps<
  NativeStackScreenProps<MainStackParams, 'beneficiarystatus'>,
  MainStackParamsList
>;
export type AddBeneficiaryScreenProps = CompositeScreenProps<
  NativeStackScreenProps<MainStackParams, 'addfavourite'>,
  MainStackParamsList
>;

export type PayBeneficiaryScreenProps = CompositeScreenProps<
  NativeStackScreenProps<MainStackParams, 'paybeneficiaryscreen'>,
  MainStackParamsList
>;
export type ConfirmBeneficiaryPaymentScreenProps = CompositeScreenProps<
  NativeStackScreenProps<MainStackParams, 'confirmbeneficiarypayment'>,
  MainStackParamsList
>;

export type ConfirmPaymentScreenProps = CompositeScreenProps<
  NativeStackScreenProps<MainStackParams, 'confirmpaymentscreen'>,
  MainStackParamsList
>;

// Payment details
export type PaymentDetailsScreenProps = CompositeScreenProps<
  NativeStackScreenProps<MainStackParams, 'paymentdetailscreen'>,
  MainStackParamsList
>;
// statementscreen
export type MoMoTransferScreenProps = CompositeScreenProps<
  NativeStackScreenProps<MainStackParams, 'momotransfer'>,
  MainStackParamsList
>;

export type TransactionScreenProps = CompositeScreenProps<
  NativeStackScreenProps<MainStackParams, 'transactionscreen'>,
  MainStackParamsList
>;
export type RecentTransactionScreenProps = CompositeScreenProps<
  NativeStackScreenProps<MainStackParams, 'recenttransactionscreen'>,
  MainStackParamsList
>;

// Approvals
export type ApprovalScreenProp = CompositeScreenProps<
  NativeStackScreenProps<MainStackParams, 'approvals'>,
  MainStackParamsList
>;

//createvoucher
export type CreateVoucherConfirmScreenProps = CompositeScreenProps<
  NativeStackScreenProps<MainStackParams, 'createvoucherconfirm'>,
  MainStackParamsList
>;

//buyairtime
export type ConfirmBuyAirtimeMyselfScreenProps = CompositeScreenProps<
  NativeStackScreenProps<MainStackParams, 'airtimedetail'>,
  MainStackParamsList
>;

export type ConfirmBuyAirtimeRecentlyPurchasedScreenProps =
  CompositeScreenProps<
    NativeStackScreenProps<MainStackParams, 'recentlypurchasedconfirm'>,
    MainStackParamsList
  >;

//pay bank to momo
export type PayBankToMomoScreenProps = CompositeScreenProps<
  NativeStackScreenProps<MainStackParams, 'paybanktomomo'>,
  MainStackParamsList
>;
export type PayMomoToBankScreenProps = CompositeScreenProps<
  NativeStackScreenProps<MainStackParams, 'paymomotobank'>,
  MainStackParamsList
>;
export type PayOtherBanksScreenProps = CompositeScreenProps<
  NativeStackScreenProps<MainStackParams, 'payotherbanks'>,
  MainStackParamsList
>;

// addMerchant
export type ConfirmAddMerchantConfirmScreenProps = CompositeScreenProps<
  NativeStackScreenProps<MainStackParams, 'newmerchantconfirm'>,
  MainStackParamsList
>;

export type MerchantDetailsScreenProps = CompositeScreenProps<
  NativeStackScreenProps<MainStackParams, 'merchantdetails'>,
  MainStackParamsList
>;

export type MerchantRecentlyPaidConfirmScreenProps = CompositeScreenProps<
  NativeStackScreenProps<MainStackParams, 'recentlypaidconfirm'>,
  MainStackParamsList
>;

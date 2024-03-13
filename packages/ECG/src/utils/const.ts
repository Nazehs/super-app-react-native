// import Images from './Images';
import { Styles } from './Styles';
import strings from './strings';

export const fontWeight = {
  100: { fontWeight: '100' },
  200: { fontWeight: '200' },
  300: { fontWeight: '300' },
  400: { fontWeight: '400' },
  500: { fontWeight: '500' },
  600: { fontWeight: '600' },
  700: { fontWeight: '700' },
  800: { fontWeight: '800' },
  900: { fontWeight: '900' },
};



export const navigations: any = {
  HomeScreen: 'Home',
  PendingPaymentPage: 'PendingPaymentPage',
  PaySuccess: "PaySuccess",
  PaymentDetailsSummaryPage: 'PaymentDetailsSummaryPage',
  PaymentConfirmationPage: 'PaymentConfirmationPage',
  BillPaymentDetailsPage: 'BillPaymentDetailsPage',
};

// export const navigationTabRTE = [
//   { name: 'Redeem', icon: Images.REDEEMICON, nav: "RewardsScreen" },
//   { name: 'Transfer', icon: Images.TRANSFER, nav: "TransferScreen" },
//   { name: 'Exchange', icon: Images.EXCHANGE, nav: "RewardsScreen" },
// ];

// export const InterestDummyData = [
//   { name: 'Entertainment', icon: Images.DELETE },
//   { name: 'Travel', icon: Images.TRAVEL },
//   { name: 'Food', icon: Images.FOOD },
//   { name: 'Shopping', icon: Images.SHOPPING },
//   { name: 'Education', icon: Images.EDUCATION },
//   { name: 'Gadgets', icon: Images.GADGETS },
// ];

// export const MyInterestData = [
//   { name: 'Entertainment', icon: Images.DELETE },
//   { name: 'Travel', icon: Images.TRAVEL },
//   { name: 'Shopping', icon: Images.SHOPPING },
//   { name: 'Gadgets', icon: Images.GADGETS },
// ];

export const activeStateData = {
  1: {
    title: strings.choose_your_interests,
    label: strings.Choose_your_areas,
    active: 1,
  },
  2: { title: strings.your_information, label: strings.let_us_know, active: 2 },
};

// export const TabListData = [
//   { name: 'All', isSelected: true },
//   { name: 'Travel', icon: Images.DELETE, isSelected: false },
//   { name: 'Food', icon: Images.DELETE, isSelected: false },
//   { name: 'Shopping', icon: Images.DELETE, isSelected: false },
//   { name: 'Cashback', icon: Images.DELETE, isSelected: false },
//   { name: 'Exchange', icon: Images.DELETE, isSelected: false },
// ];

export const TabVoucherData = [
  { name: 'All', isSelected: true },
  { name: 'Active', isSelected: false },
  { name: 'Used', isSelected: false },
  { name: 'Expired', isSelected: false },
  { name: 'Canceled', isSelected: false },
];

// export const voucherData = [
//   {
//     id: 1,
//     month: '20 Sep',
//     type: 'Amazon',
//     status: 'New!',
//     color: color.yellow,
//     title: '20% Cashback',
//     image: Images.AMOZON,
//     filter: "Active",
//   },
//   {
//     id: 2,
//     month: '20 Sep',
//     type: 'Nike',
//     status: 'New!',
//     color: color.yellow,
//     title: '25% Cashback',
//     image: Images.NIKE,
//     filter: "Active",
//   },
//   {
//     id: 3,
//     month: '20 Sep',
//     type: 'McDonald’s',
//     title: '25% Cashback',
//     image: Images.MCDO,
//     filter: "Expired",
//   },
//   {
//     id: 4,
//     month: '20 Sep',
//     type: 'Spotify',
//     title: '25% Cashback',
//     image: Images.SPOTIFY,
//     filter: "Canceled",
//   },
//   {
//     id: 5,
//     month: '20 Sep',
//     type: 'Coursera',
//     title: '15% Off',
//     image: Images.COURSERA,
//     filter: "Used",
//   },
//   {
//     id: 6,
//     month: '20 Sep',
//     type: 'Café Coffee Day',
//     title: '15% Off',
//     image: Images.CAFE,
//     filter: "Expired",
//   },
// ];

// export const GameListData = [
//   {
//     id: 1,
//     point: '1300',
//     color: color.yellow,
//     title: 'Spin the Wheel',
//     description: 'Do a transaction of more than $5 & earn..',
//     image: Images.GAMEWHEEL,
//     price: '$20/hr',
//     nav: "GameWheel",
//   },
//   {
//     id: 2,
//     point: '1200',
//     title: 'Take a Quiz',
//     description: 'Give the right answer & win 50 points',
//     image: Images.QUIZ,
//     price: '$20/hr',
//     type: "custom",
//     nav: "QuizScreen",
//   },
//   {
//     id: 2,
//     point: '1300',
//     title: 'Watch & Win',
//     description: 'Watch videos and earn rewards',
//     image: Images.WATCHPLAY,
//     price: '$20/hr',
//   },
//   {
//     id: 2,
//     point: '1200',
//     title: 'Take a survey',
//     description: 'Take the survey and earn 200 loyalty points',
//     image: Images.SURVERY,
//     price: '$20/hr',
//     nav: "SurveyScreen",
//   },
//   {
//     id: 2,
//     point: '1200',
//     title: 'Mission & Challenges',
//     description: 'Watch videos and earn rewards',
//     image: Images.CHALLENGES,
//     price: '$20/hr',
//   },
// ];

// export const ExchangeListData = [
//   {
//     id: 1,
//     point: '1300',
//     color: color.yellow,
//     title: 'Starbucks Loyal',
//     description: 'Do a transaction of more than $5 & earn 1000 points.',
//     image: Images.ITEM8,
//     price: '$20/hr',
//   },
//   {
//     id: 2,
//     point: '1200',
//     title: 'Target Circle',
//     description: 'Do a transaction of more than $5 & get 10%',
//     image: Images.ITEM7,
//     price: '$20/hr',
//     type: "custom",
//   },
//   {
//     id: 2,
//     point: '1300',
//     title: 'Amazon Reward P..',
//     description: 'Do a transaction of more than $5 & earn 1000 point',
//     image: Images.ITEM6,
//     price: '$20/hr',
//     type: "custom",
//   },
//   {
//     id: 2,
//     point: '1200',
//     title: 'Apple Loyalty P..',
//     description: 'Do a transaction of more than $5 & get 10%',
//     image: Images.ITEM5,
//     price: '$20/hr',
//   },
// ];

// export const OffersListData = [
//   {
//     id: 1,
//     point: '1300',
//     status: 'New!',
//     color: color.yellow,
//     title: 'Year end delight',
//     description: 'Do a transaction of more than $5 & earn 1000 points.',
//     image: Images.ITEM4,
//     price: '$20/hr',
//   },
//   {
//     id: 2,
//     point: '1200',
//     status: 'New!',
//     title: 'First time offer',
//     description: 'Do a transaction of more than $5 & get 10%',
//     image: Images.ITEM2,
//     price: '$20/hr',
//     type: "custom",
//   },
//   {
//     id: 2,
//     point: '1300',
//     title: 'Year end delight',
//     description: 'Do a transaction of more than $5 & earn 1000 point',
//     image: Images.ITEM3,
//     price: '$20/hr',
//   },
//   {
//     id: 2,
//     point: '1200',
//     title: 'Globetrotter',
//     description: 'Do a transaction of more than $5 & get 10%',
//     image: Images.ITEM4,
//     price: '$20/hr',
//   },
// ];

export const recentData = [
  { name: 'travel offers' },
  { name: 'pizza' },
  { name: 'gadgets' },
];

export const searchData = [
  { name: 'online games' },
  { name: 'online gaming' },
  { name: 'online offers' },
];

export const popularSearchData = [
  { name: 'Oppenheimer' },
  { name: 'Iphone 14' },
  { name: 'Online games' },
  { name: 'Travel' },
];

// export const HistoryListData = [
//   {
//     id: 1,
//     status: 'Points redeemed',
//     color: color.yellow,
//     title: 'Points redeemed',
//     type: 'Voucher',
//     image: Images.REDEEM,
//     price: '750',
//     date: '20 Sep',
//     month: 'September',
//   },
//   {
//     id: 2,
//     status: 'Points earned',
//     title: 'Points earned',
//     type: 'Transaction',
//     image: Images.REDEEM,
//     price: '1000',
//     date: '20 Sep',
//   },
//   {
//     id: 3,
//     status: 'Points redeemed',
//     title: 'Points transferred',
//     type: 'Transfer',
//     image: Images.REDEEM,
//     price: '1250',
//     date: '20 Sep',
//   },
//   {
//     id: 4,
//     status: 'Points redeemed',
//     title: 'Points redeemed',
//     type: 'Walmart e-voucher',
//     image: Images.REDEEM,
//     price: '750',
//     date: '20 Sep',
//   },
//   {
//     id: 5,
//     status: 'Points earned',
//     title: 'Points earned',
//     type: 'Transaction',
//     image: Images.REDEEM,
//     price: '2500',
//     date: '20 Sep',
//   },
//   {
//     id: 1,
//     status: 'Points redeemed',
//     color: color.yellow,
//     title: 'Points redeemed',
//     type: 'Voucher',
//     image: Images.REDEEM,
//     price: '750',
//     date: '20 Aug',
//     month: 'August',
//   },
//   {
//     id: 2,
//     status: 'Points earned',
//     title: 'Points earned',
//     type: 'Transaction',
//     image: Images.REDEEM,
//     price: '1000',
//     date: '20 Aug',
//   },
//   {
//     id: 3,
//     status: 'Points redeemed',
//     title: 'Points transferred',
//     type: 'Transfer',
//     image: Images.REDEEM,
//     price: '1250',
//     date: '20 Aug',
//   },
//   {
//     id: 4,
//     status: 'Points redeemed',
//     title: 'Points redeemed',
//     type: 'Walmart e-voucher',
//     image: Images.REDEEM,
//     price: '750',
//     date: '20 Aug',
//   },
//   {
//     id: 5,
//     status: 'Points earned',
//     title: 'Points earned',
//     type: 'Transaction',
//     image: Images.REDEEM,
//     price: '2500',
//     date: '20 Aug',
//   },
// ];

export const filterData = [
  { name: 'Earned' },
  { name: 'Redeemed' },
  { name: 'Transferred' },
];

export const monthData = [
  { name: 'Recent' },
  { name: 'This month' },
  { name: 'Last month' },
  { name: 'Custom' },
];

// export const profileTabMenu = [
//   {
//     name: 'Manage Profile',
//     icon: Images.PROFILE,
//     navigation: navigations.ManageProfileScreen,
//   },
//   { name: 'Settings', icon: Images.SETTING, navigation: 'SettingScreen' },
//   { name: 'Refer a Friend', icon: Images.REFERS, navigation: 'ReferAFriendScreen' },
//   { name: 'Help', icon: Images.HELP, navigation: '' },
//   { name: 'Sign out', icon: Images.LOGOUT, navigation: '' },
// ];

export const timeLineData = [
  {
    day: 'WED 16',
    data: [
      { status: 'Points earned', type: 'Transaction', point: 50 },
      { status: 'Points redeemed', type: 'Transaction', point: 100 },
    ],
  },
  {
    day: 'WED 14',
    data: [{ status: 'Points redeemed', type: 'Transaction', point: 75 }],
  },
  {
    day: 'WED 11',
    data: [
      { status: 'Points earned', type: 'Transaction', point: 50 },
      { status: 'Points redeemed', type: 'Transaction', point: 100 },
      { status: 'Points redeemed', type: 'Transaction', point: 100 },
    ],
  },
];


export const notificationData = [
  {
    id: 1,
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    time: 'Today',
    isRead: true,
  },
  {
    id: 2,
    message: "Congrats! You have been upgraded to gold tier.",
    time: 'Yesterday',
    isRead: true,
  },
  {
    id: 3,
    message: "Checkout the latest rewards available in the catalog exclusively for you.",
    time: '04 Sep',
    isRead: false,
  },
  {
    id: 4,
    message: "Welcome to the loyalty club! We have credited your 500 welcome point.",
    time: '01 Sep',
    isRead: false,
  }
];

export const quizData = [
  {
    question: "Who won the FIFA World cup 2022?",
    data: [
      { option: "Brazil" },
      { option: "Germany" },
      { option: "Argentina" },
      { option: "Croatia" },
    ],
    answer: "Argentina",
    result: "",
  },
  {
    question: "Which is your favorite sport?",
    data: [
      { option: "Cricket" },
      { option: "Football" },
      { option: "Basketball" },
      { option: "Tennis" },
    ],
    answer: "Football",
    result: "",
  },
  {
    question: "Which is your favorite sport?",
    data: [
      { option: "Cricket" },
      { option: "Football" },
      { option: "Basketball" },
      { option: "Tennis" },
    ],
    answer: "Football",
    result: "",
  },
  {
    question: "Which is your favorite sport?",
    data: [
      { option: "Cricket" },
      { option: "Football" },
      { option: "Basketball" },
      { option: "Tennis" },
    ],
    answer: "Football",
    result: "",
  }
]

// export const surveyData = [
//   {
//     question: "Which is your favorite sports brand?",
//     data: [
//       { option: Images.SURVERYITEM1 },
//       { option: Images.SURVERYITEM2 },
//       { option: Images.SURVERYITEM3 },
//       { option: Images.SURVERYITEM2 },
//     ],
//     answer: 0,
//     isImage: true,
//   },
//   {
//     question: "Which is your favorite sport?",
//     data: [
//       { option: "Cricket" },
//       { option: "Football" },
//       { option: "Basketball" },
//       { option: "Tennis" },
//     ],
//     answer: 0,
//     isImage: false,
//   }
// ]


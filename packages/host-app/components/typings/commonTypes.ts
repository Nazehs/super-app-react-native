export type Filter =
  | 'All'
  | 'In'
  | 'Out'
  | 'Cash in'
  | 'Cash out'
  | 'MoMo user'
  | 'Bank transfer'
  | 'Bill payment'
  | 'Topup';

export type transactionType =
  | 'EXTERNAL_PAYMENT'
  | 'EXTERNAL_TRANSFER'
  | 'TRANSFER'
  | 'DEBIT'
  | 'LAST_TRANSACTIONS'
  | 'SAVINGS_INTEREST_PAYOUT'
  | 'WITHDRAWAL'
  | 'TRANSFER_TO_VOUCHER'
  | 'TRANSFER_FROM_VOUCHER'
  | 'EXPIRE_VOUCHER'
  | 'TRANSFER_TO_INVITATION'
  | 'TRANSFER_FROM_INVITATION'
  | 'TRANSFER_FROM_VOUCHER_ATM'
  | 'BATCH_TRANSFER'
  | 'CUSTODY_ACCOUNTS_TRANSFER'
  | 'EXTERNAL_TRANSFER'
  | 'FLOAT_TRANSFER'
  | 'TRANSFER_TO_ANY_BANK_ACCOUNT'
  | 'TRANSFER_LOY'
  | 'EXTERNAL_TRANSFER_LOY'
  | 'REFUND'
  | 'REVERSAL'
  | 'REVERSAL_FEE'
  | 'REVERSAL_LOY'
  | 'REVERSAL_COMMISSIONING'
  | 'FEE_REFUND'
  | 'PAYMENT'
  | 'PAYMENT_SEND'
  | 'PAYMENT_RECEIVE'
  | 'PAYMENT_LOY'
  | 'PAYMENT_SEND_LOY'
  | 'PAYMENT_RECEIVE_LOY'
  | 'EXTERNAL_PAYMENT'
  | 'BILL_PAYMENT'
  | 'ADJUSTMENT'
  | 'ADJUSTMENT_FEE'
  | 'ADJUSTMENT_LOY'
  | 'ADJUSTMENT_COMMISSIONING'
  | 'ADJUSTMENT_TAX'
  | 'ADJUSTMENT_DISCOUNT_PROMOTION'
  | 'CASH_OUT'
  | 'CASH_IN'
  | 'CASH_OUT_ATM';

export type ApprovalType = {
  accountfri: string;
  amount: {
    amount: string;
    currency: string;
  };
  approvalcreationtime: string;
  approvalexpirytime: string;
  approvalid: string;
  approvaltype: string;
  fee: {
    amount: string;
    currency: string;
  };
  fname: string;
  id: string;
  initiatingaccountholderid: string;
  message: string;
  mm: string;
  receivernumber: string;
  status: string;
  surname: string;
  usertype: string;
};

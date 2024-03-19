import { useLazyGetBalanceQuery } from '@/api/Data/GetBalance';
import {
  selectUserDetails,
} from '@/features/auth/authSlice';
import { useTypedSelector } from '@/store/store';
import { useEffect, useState } from 'react';

const useGetBalance = () => {
  // const sessionId = useTypedSelector(selectPreloginSessionId);
  const [balanceData, setbalanceData] = useState(null);
  const { mobileNumber, countryCode, currency } =
    useTypedSelector(selectUserDetails) || {};
  const [getBalanceData, balanceLoading] = useLazyGetBalanceQuery({});
  const getBalance = async () => {
    try {
      const data = await getBalanceData({
        mobileNumber: mobileNumber,
      }).unwrap();
      console.log('datararar', data);
      setbalanceData(data);
    } catch (error) {
      setbalanceData(null);
    }
  };
  useEffect(() => {
    getBalance();
  }, []);

  return { balanceData, countryCode, currency, balanceLoading };
};

export default useGetBalance;

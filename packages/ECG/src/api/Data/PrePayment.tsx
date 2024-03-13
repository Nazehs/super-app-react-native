// import {nodeApi} from '../axios';

// import {nodeApi} from '../axios';
import { GET_DATA } from '../../constants/urls';
import { nodeApi } from '../index';

const { PRE_PAYMENT } = GET_DATA;


export const accessplatformApi = nodeApi.injectEndpoints({
    endpoints: builder => ({
        getPrePaymentData: builder.mutation<any, any>({
            query: body => {
                console.log('PrePayment Body----------------> ', body);
                return {
                    url: PRE_PAYMENT,
                    method: 'POST',
                    headers: {
                        // 'Content-Type': 'application/json',
                        // 'Cookie': body?.Cookie,
                        'id': '233244304915',
                        'user-agent': 'mobile',
                        // 'Authorization': body?.token
                    },
                    body: {
                        "billType": body?.billType,
                        "accountNumber": body?.accountNumber,
                        "paymentServiceName": body?.paymentServiceName,
                        "currency": body?.currency,
                        "amount": body?.amount
                    }
                };
            },
            transformResponse: async responseData => {
                console.log('responseData PrePayment', responseData);
                // const de = await decrypt(responseData);
                return responseData;
            },
            transformErrorResponse: (errorResponse: any) => {
                console.log('errorResponse PerPayment', errorResponse);
                // return decrypt(errorResponse.data);
                return errorResponse.data;
            },
        }),
    }),
    overrideExisting: true,
});

export const { useGetPrePaymentDataMutation } = accessplatformApi;

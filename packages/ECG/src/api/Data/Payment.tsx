import { GET_DATA } from '../../constants/urls';
import { nodeApi } from '../index';

const { PAYMENT } = GET_DATA;

export const accessPlatformApi = nodeApi.injectEndpoints({
    endpoints: builder => ({
        getPaymentData: builder.mutation({
            query: body => {
                console.log('PrePayment Body----------------> ', body);
                return {
                    url: PAYMENT,
                    method: 'POST',
                    headers: {
                        'id': '233244304915',
                        'user-agent': 'mobile',
                        // 'Content-Type': 'application/json',
                        // 'Cookie': body?.Cookie,
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
            transformResponse: (responseData, meta, arg) => {
                console.log('responseData Payment', responseData);
                return responseData;
            },
            transformErrorResponse: errorResponse => {
                console.error('errorResponse Payment', errorResponse);
                if (!errorResponse.response) {
                    return { error: 'Network error or CORS issue' };
                } else if (errorResponse.data) {
                    return errorResponse.data;
                } else {
                    return { error: 'An unexpected error occurred' };
                }
            },
        }),
    }),
    overrideExisting: true,
});

export const { useGetPaymentDataMutation } = accessPlatformApi;

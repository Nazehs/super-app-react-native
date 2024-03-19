// import {nodeApi} from '../axios';

// import {nodeApi} from '../axios';
import { URLS } from '@/constants/urls';
import { nodeApi } from '../index';

const { GET_BALANCE } = URLS;

export const accessplatformApi = nodeApi.injectEndpoints({
    endpoints: builder => ({
        getBalance: builder.query<any, any>({
            query: body => {
                console.log('body ', body);
                return {
                    url: GET_BALANCE,
                    // responseHandler: response => response.text(),
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: {
                        getbalancerequest: {
                            fri: body.mobileNumber,
                        },
                    },
                };
            },
            transformResponse: async responseData => {
                console.log('responseData', responseData);
                // const de = await decrypt(responseData);
                return responseData;
            },
            transformErrorResponse: (errorResponse: any) => {
                console.log('errorResponse', errorResponse);
                // return decrypt(errorResponse.data);
                return errorResponse.data;
            },
        }),
    }),
    overrideExisting: true,
});

export const { useGetBalanceQuery, useLazyGetBalanceQuery } = accessplatformApi;

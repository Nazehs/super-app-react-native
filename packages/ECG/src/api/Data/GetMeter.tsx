import { GET_DATA } from '../../constants/urls';
import { nodeApi } from '../index';

const { GET_METER } = GET_DATA;

export const accessPlatformApi = nodeApi.injectEndpoints({
    endpoints: builder => ({
        getMeterData: builder.mutation<any, any>({
            query: body => {
                console.log('get Meter Login Body----------------> ', body);
                const { idVer, Cookie } = body;
                return {
                    url: GET_METER,
                    method: 'POST',
                    headers: {
                        'id': idVer,
                        'user-agent': 'mobile',
                        'Cookie': `Authorization=${Cookie}`,
                    },
                    body: {
                        "identityvalue": body?.idVer
                    }
                };
            },
            transformResponse: async (responseData: any, meta, arg) => {
                console.log('responseData Meter', responseData);
                try {
                    if (responseData?.statusCode === 200) {
                        console.log('responseData Meter valid', responseData);
                        return responseData;
                    } else {
                        throw new Error(responseData || 'Unknown error processing meter data');
                    }
                } catch (e: any) {
                    console.error('transformResponse ', e);
                    return e;
                }
            },
            transformErrorResponse: (error: any) => {
                console.log('errorResponse Meter', error);
                try {
                    if (error?.statusCode === 401) {
                        return { error: 'Unauthorized access - please log in again.' };
                    } else if (error?.statusCode === 500) {
                        return { error: 'Server error - please try again later.' };
                    } else {
                        return error?.data ? error.data : { error: 'An unexpected error occurred' };
                    }
                } catch (e: any) { console.error(e); return e }
            },
        }),
    }),
    overrideExisting: true,
});

export const { useGetMeterDataMutation } = accessPlatformApi;

// import { errorDataUpdate } from '@/features/auth/authSlice';
// import { RootState } from '@/store/store';
// import {
//   BaseQueryFn,
//   FetchArgs,
//   FetchBaseQueryError,
//   createApi,
//   fetchBaseQuery,
// } from '@reduxjs/toolkit/query/react';

// const baseQuery = fetchBaseQuery({
//   baseUrl: 'https://momoapimdev.mtn.com/api/ae/con/',
//   credentials: 'include',
//   prepareHeaders: (headers, { getState }) => {
//     const accessToken = (getState() as RootState).auth.accessToken;
//     if (accessToken) {
//       headers.set('Bearer', `${accessToken}`);
//     }
//     return headers;
//   },
// });

// // Wrapping the base query
// const baseQueryWithReauth: BaseQueryFn<
//   string | FetchArgs,
//   unknown,
//   FetchBaseQueryError
// > = async (args: any, api, extraOptions) => {
//   console.log('base with reauth');
//   let result = await baseQuery(args, api, extraOptions);

//   if (result.error) {
//     const responseCode = result.error?.data;
//     console.log('-------------', responseCode?.statusCode);
//     api.dispatch(
//       errorDataUpdate({
//         errorStatus: true,
//         errorMessage: responseCode?.statusCode,
//       }),
//     );

//     console.log('url == ', args.url);
//     let url = args && args?.url;

//     if (url === -'v1/getaccountholderinfo') {
//       return responseCode;
//     }
//     if (result && result?.error?.status === 401) {
//       console.log('session timeout signing out...');
//     } else if (result?.error?.status === 'FETCH_ERROR') {
//     }
//     return result;
//   }

//   return result;
// };

// export const nodeApi = createApi({
//   baseQuery: baseQueryWithReauth,
//   tagTypes: ['MOMO_USER'],
//   endpoints: () => ({}),
// });

import { createApi, fetchBaseQuery, BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { RootState } from '@/store/store';
import { errorDataUpdate } from '@/features/auth/authSlice';

interface BackendApiErrorResponse {
  statusCode: number;
  message: string;
}

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://momoapimdev.mtn.com/api/ae/con/',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.accessToken;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  console.log('mini app result', result);

  if (result.error) {
    const errorData: BackendApiErrorResponse = result.error.data as BackendApiErrorResponse;
    api.dispatch(errorDataUpdate({
      errorStatus: true,
      errorMessage: errorData?.message || 'Unknown error',
    }));
    let url = args && args?.url;
    if (result.error.status === 401) {
      console.error('Authentication error. Token may have expired.');
    } else if (result.error.status === 'FETCH_ERROR') {
      console.error('Fetch error occurred.');
    }

    console.error(`Error occurred for request to ${args.url}:`, result.error);
  }

  return result;
};

export const nodeApi = createApi({
  reducerPath: 'nodeApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['MOMO_USER'],
  endpoints: (builder) => ({}),
});

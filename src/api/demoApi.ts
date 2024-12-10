import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Trial } from '../models/trials';

export const demoApi = createApi({
    reducerPath: 'demoApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_BASE_URL,
        prepareHeaders: (headers) => headers
    }),
    endpoints: (builder) => ({
        getTrial: builder.query<{trials: Trial[]}, void>({
            query: () => ({
                url: '/posts'
            }),
        })
    })
});

export const {useGetTrialQuery} = demoApi;
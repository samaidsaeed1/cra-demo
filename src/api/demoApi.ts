import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const demoApi = createApi({
    reducerPath: 'demoApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_BASE_URL,
        prepareHeaders: (headers) => headers
    }),
    endpoints: (builder) => ({
        getData: builder.query<void, void>({
            query: () => ({
                url: ''
            })
        })
    })
});

export const {useGetDataQuery} = demoApi;
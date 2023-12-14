import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_URL as string,
    }),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => "users",
        }),
    }),
}) 
export const { useGetUsersQuery } = userApi;
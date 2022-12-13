import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUserResponse } from '../../models/user'

export const usersApi = createApi({
    reducerPath: 'users/api',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_BASE_URL,
    }),
    endpoints: build => ({
        getUsers: build.query<IUserResponse[] , void>({
            query: () => 'users',
            // @ts-ignore
            transformResponse: (response: IUserResponse[]): IUser[] => {
                return response.map( ({id, name}) => ({id, name}) )
            },
        }),
    }),
})

export const { useGetUsersQuery } = usersApi
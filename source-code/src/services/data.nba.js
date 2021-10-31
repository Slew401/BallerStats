import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const baseUrl = "http://data.nba.net/10s"

const createRequest = url => ({ url });

export const data_nba = createApi({
    reducerPath: 'createApi', 
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
       getTeamsFromSource: builder.query({
           query: () => createRequest("/prod/v2/2021/teams.json")
       }),
    })
});

export const {
    useGetTeamsFromSourceQuery
} = data_nba;
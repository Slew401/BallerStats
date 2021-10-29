import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const headers = {
    'x-rapidapi-host': 'api.sportradar.us/nba/trial/v7/en',
    'x-rapidapi-key': 'dtvarwvtj66mk932j3m3cta4'
}

const baseUrl = "http://api.sportradar.us/nba/trial/v7/en"

const createRequest = url => ({ url, headers: headers});

export const srAPI = createApi({
    reducerPath: 'createApi', 
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
       getTeamRoster: builder.query({
           query: () => createRequest("/teams/583ec825-fb46-11e1-82cb-f4ce4684ea4c/profile.json?api_key=dtvarwvtj66mk932j3m3cta4")
       }),
    })
});

export const {
    useGetTeamRosterQuery,
}= srAPI
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const baseUrl = "http://api.sportradar.us/nba/trial/v7/en"
const apiKey = "dtvarwvtj66mk932j3m3cta4"

const headers = {
    'Access-Control-Allow-Origin': '*',
}

const createRequest = url => ({ url, headers: headers});

export const sportsradar = createApi({
    reducerPath: 'createApi', 
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getTeamsProfile: builder.query({
            query: (teamId) => createRequest(`/teams/${teamId}/profile.json?api_key=${apiKey}`)
        })
    })
});

export const {
    useGetTeamsProfileQuery
} = sportsradar;

// {curl -X GET "https://api.sportradar.us/nba/trial/v7/en/players/37fbc3a5-0d10-4e22-803b-baa2ea0cdb12/profile.xml?api_key=dtvarwvtj66mk932j3m3cta4"}
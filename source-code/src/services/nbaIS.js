import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const headers = {
    'x-rapidapi-host': 'nba-player-individual-stats.p.rapidapi.com',
    'x-rapidapi-key': '6e009c2a9amsh074604bd5f4bf85p1222d5jsne72d4a262676'
}

const baseUrl = "https://nba-player-individual-stats.p.rapidapi.com"

const createRequest = url => ({ url, headers: headers});

export const nbaISApi = createApi({
    reducerPath: 'createApi', 
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getTeams: builder.query({
            query: () => createRequest("/teams")
        })
    })
});

export const {
    useGetTeamsQuery
} = nbaISApi;

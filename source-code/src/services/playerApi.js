import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const headers = {
    'x-rapidapi-host': 'free-nba.p.rapidapi.com',
    'x-rapidapi-key': '6e009c2a9amsh074604bd5f4bf85p1222d5jsne72d4a262676'
}

const baseUrl = "https://free-nba.p.rapidapi.com"

const createRequest = url => ({ url, headers: headers});

export const playersApi = createApi({
    reducerPath: 'createApi', 
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getPlayers: builder.query({
            query: () => createRequest("/players"),
        }) ,
        getTeams: builder.query({
            query: () => createRequest("/teams")
        })
    })
});

export const {
    useGetPlayersQuery,
    useGetTeamsQuery
} = playersApi; 


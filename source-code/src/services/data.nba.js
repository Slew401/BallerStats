import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const baseUrl = "http://127.0.0.1:5000/api"

const headers = {
    'Host': 'stats.nba.com',
    'Connection': 'keep-alive',
    'Cache-Control': 'max-age=0',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'en-US,en;q=0.9',
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}

const createRequest = url => ({ url , headers: headers})

export const data_nba = createApi({
    reducerPath: 'createApi', 
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
       getPlayerSeasons: builder.query({
           query: (player_id) => createRequest(`/getPlayerSeasons?player_id=${player_id}`)
       })
    })
});

export const {
    useGetPlayerSeasonsQuery
} = data_nba;